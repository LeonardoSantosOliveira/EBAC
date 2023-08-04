$(document).ready(function(){

    $('#telefone').mask('(00)00000-0000',{
        placeholder:'(00)00000-0000'
    })
    $('form').validate({
        rules:{
            nome:{
                required:true
            },
            email:{
                required:true
            },
            telefone:{
                required:true
            },
            
        },
        messages:{
            nome:'Por favor, digite o seu nome.',
            email:'Por favor, digite o seu e-mail.',
            telefone:'Por favor, digite o seu telefone.'
        }
    })

    $('form').on('submit', function(e){
        const nome = $('#nome').val()
        const email = $('#email').val()
        const telefone = $('#telefone').val()
        const mensagem = $('#mensagem').val()
        e.preventDefault()
        if(nome == '' || email == '' || telefone == '' || mensagem == ''){
            alert('Por favor, preencha o formulário.')
        } else{
            alert('Formulário enviado com sucesso!')
        }
        $('#nome').val('')
        $('#email').val('')
        $('#telefone').val('')
        $('#mensagem').val('')
    })
})