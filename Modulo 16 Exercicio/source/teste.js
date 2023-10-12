const clique = document.querySelector("#quadrado")
clique.addEventListener('click', function(e){
    const coY = e.clientY
    const coX = e.clientX
    alert('Você na coordenada X: ' + coX + ' E na coordenada Y: ' + coY)
})