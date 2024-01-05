const redeSociais = ["Facebook", "Instagram", "Twitter"];

for (let i = 0; i < redeSociais.length; i++){
    console.log(`Eu tenho perfil na rede social: ${redeSociais[i]}`)
}

redeSociais.forEach((nomeDaRedeSocial, indice) => {
    console.log(`#${indice} Eu tenho perfil na rede social: ${nomeDaRedeSocial}`)
})

const alunos = ["Gustavo", "Julia", "Paula", "Wagner"];

const alunosObj = alunos.map(function(itemAtual){
    return {
        nome: itemAtual,
        curso: "Front-End"
    }
})

console.log(alunosObj)

const numeros = [1, 2, 3, 4, 5]
const dobroDosNumeros = numeros.map((numeroAtual) => {
    return numeroAtual * 2;
})

console.log(dobroDosNumeros);

const paula = alunosObj.find(function(item){
    return item.nome == "Paula"
})

console.log(paula)

const indiceDaPaula = alunosObj.findIndex(function(item){
    return item.nome == "Paula"
})

console.log(indiceDaPaula)


alunosObj.push({
    nome: "Lucio",
    curso: "Back-End"
})


const todosAlunosSaoDeFrontEnd = alunosObj.every(function(item){
    return item.curso == "Front-End";
})
console.log(todosAlunosSaoDeFrontEnd)

const existeAlgumAlunoBackEnd = alunosObj.some((item) => {
    return item.curso === "Back-End" && item.curso === "Front-End"
})

console.log(existeAlgumAlunoBackEnd)

function filtraAlunosDeBackEnd(aluno){
    return aluno.curso === "Back-End"
}

const alunosDeBackEnd = alunosObj.filter(filtraAlunosDeBackEnd)
console.log(alunosDeBackEnd)

const nums = [10, 20, 30, 10]

const soma = nums.reduce(function(acumulador, itemAtual){
    acumulador += itemAtual
    return acumulador
}, 0)

console.log(soma)