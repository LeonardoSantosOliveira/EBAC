document.addEventListener("DOMContentLoaded", function(){
    const fotoPerfil = document.querySelector('.profile-avatar');
    const nomePerfil = document.querySelector('.profile-name');
    const username = document.querySelector('.profile-username');
    const repositorios = document.querySelector('#repositorios');
    const seguidores = document.querySelector('#seguidores');
    const seguindo = document.querySelector('#seguindo');
    const profileLink = document.querySelector('.profile-link');

    fetch('https://api.github.com/users/LeonardoSantosOliveira')
    .then (function(resposta){
        return resposta.json()
    }).then(function(json){
        console.log(json)
        fotoPerfil.src = json.avatar_url;
        nomePerfil.innerHTML = json.name;
        username.innerHTML = `@${json.login}`;
        repositorios.innerHTML = json.public_repos;
        seguidores.innerHTML = json.followers;
        seguindo.innerHTML = json.following;
        profileLink.href = json.html_url;
    }).catch(function(erro){
        alert('Ocorreu um erro ao carregar as informações. Por favor, tente novamente.')
    }).finally(function(){
        alert('As informações foram carregadas com sucesso!')
    })
})