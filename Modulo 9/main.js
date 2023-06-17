$(document).ready(function() {
    $("header button")
    $('header button').click(function(){
        $('form').slideDown(200)
    })

    $('#cancel-button').click(function(){
        $('form').slideUp(200)
    })

    $('form').on('submit', function(e){
        e.preventDefault()
        const enderecoNovaImagem = $('#endereco-imagem-nova').val()
        const novoItem = $('<li style="display:none"></li>')
        $(`<img src="${enderecoNovaImagem}" />`).appendTo(novoItem)
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(600)
        $('#endereco-imagem-nova').val('')
    })
})