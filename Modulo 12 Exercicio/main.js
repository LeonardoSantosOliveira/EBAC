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
})