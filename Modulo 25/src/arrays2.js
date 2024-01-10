const redeSociais = ["Facebook", "Instagram", "TwitterX"];

for (var i = 0; i < redeSociais.length; i++){
    console.log(`Eu tenho conta na rede social: ${redeSociais[i]}`)
}

redeSociais.forEach((itemAtual, indice) => {
    console.log(`#${indice}  Eu tenho conta na ${itemAtual}`);
})

const alunos = ['Gustavo', 'Julia', 'Paula', "Wagner"]

const alunosObj = alunos.map((itemAtual) => {
    return {
        nome: itemAtual,
        curso: "Front-End"
    }
})

console.log(alunosObj)

const numeros = [1, 2, 3, 4, 5]
const dobroDosNumeros = numeros.map((numeroAtual) => {
    return numeroAtual * 2
})

console.log(dobroDosNumeros)

const paula = alunosObj.find((itemAtual) => {
    return itemAtual.nome == "Paula"
})

console.log(paula)

const indiceDaPaula = alunosObj.findIndex((item) => {
    return item.nome == "Paula" //true / false
})

console.log(indiceDaPaula);

alunosObj.push({
    nome: 'Lucia',
    curso: 'Back-End'
})

const cursoEhFrontEnd = alunosObj.every((itemAtual) => {
    return itemAtual.curso == "Front-End"
})

console.log(cursoEhFrontEnd)

const fullStack = alunosObj.some((itemAtual) => {
    return itemAtual.curso == "Front-End" && itemAtual.curso == "back-End"
})

console.log(fullStack)

const alunosBack = alunosObj.filter((item) => {
    return item.curso == 'Back-End'
})

console.log(alunosBack)

const nums = [10, 20, 30, 10]

const soma = nums.reduce((acumulador, itemAtual) => {
    acumulador += itemAtual;
    return acumulador;
}, 0)

console.log(soma)