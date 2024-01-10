function funcaoMuitoPesada() {
    let execucoes = 0;
    for (let i = 0; i < 1000000000; i++){
        execucoes++
    }
    return execucoes;
}

const funcaoMuitoPesadaPromise = new Promise((resolve, reject) => {
    try{
        let execucoes = 0;
        for (let i = 0; i < 1000000000; i++){
            execucoes++
        }
        resolve(execucoes)
    } catch(e) {
        reject('Deu erro na iteração dos números');
    }
})

console.log('inicio');
// console.log(funcaoMuitoPesada())
funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro))
console.log('fim');

async function execucaoPrincipal() {
    console.log('Inicio')
    await funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro))
    console.log('Fim')
}