$(document).ready(function(){
    $('.menuHamburguer').click(function(){
        $('#navMenu').slideToggle()
    })

    $('#telefone').mask("(00)00000-0000",{
        placeholder: '(00)00000-0000'
    })
    $('#cpf').mask("000.000.000-00",{
        placeholder: '000.000.000-00'
    })
    $('#cep').mask("00000-000",{
        placeholder: '00000-00'
    })

    $('form').validate({
        rules:{
            nomeCompleto:{
                required:true
            },
            email:{
                required:true
            },
            telefone:{
                required:true
            },
            cpf:{
                required: true
            },
            cep:{
                required:true
            }
        },
        messages:{
            nomeCompleto: 'Por favor, preencha o seu nome completo.',
            email: 'Por favor, preencha o seu email.',
            telefone: 'Por favor, preencha o seu telefone.',
            cpf: 'Por favor, preencha o seu cpf',
            cep: 'Por favor, preencha o seu CEP'
        }
    })
})