var n1 = document.getElementById('n1')
var n2 = document.getElementById('n2')
var form = document.getElementById('form')
var res = document.getElementById('res')

form.addEventListener('submit', function(event){
    event.preventDefault()

    if (n2.value > n1.value){
        res.innerHTML = 'O formulário é <b>VÁLIDO</b>'
        res.classList.add('positive')
        res.classList.remove('negative')
    } else {
        res.innerHTML = 'O formulário é <b>INVÁLIDO</b>'
        res.classList.add('negative')
        res.classList.remove('positive')
    }
})
