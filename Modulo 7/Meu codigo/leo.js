var form = document.getElementById('form-deposito')
form.addEventListener('submit', depositar)
var nome = document.getElementById('nome-beneficiario')
var formValido = false

function validar (nomeCompleto){
    const nomearray = nomeCompleto.split(' ')
    return nomearray.length >= 2
}

function depositar(event){
    event.preventDefault()


    var conta = document.getElementById('numero-conta')
    var valor = document.getElementById('valor-deposito')
    var mensagemsucesso = (`O montante <b>R$${valor.value}</b> foi depositado para <b>${nome.value}</b>, conta: <b>${conta.value}</b>`)
    

    formValido = validar(nome.value)
    if (formValido){
        var containermensagemsucesso = document.querySelector('.success-message')
        containermensagemsucesso.style.display = 'block'
        containermensagemsucesso.style.textAlign = 'center'
        containermensagemsucesso.innerHTML = mensagemsucesso

        nome = ''
        valor = ''
        conta = ''
    } else {
        nome.style.border = '2px solid red'
        errormessage.style.display = 'block'
    }
}

nome.addEventListener('keyup', function(event){
    formValido = validar(nome.value)
    if (!formValido){
        nome.classList.add('error')
        document.querySelector('.error-message').style.display = 'block'
    } else {
        nome.classList.remove('error')
        document.querySelector('.error-message').style.display = 'none'
    }
})