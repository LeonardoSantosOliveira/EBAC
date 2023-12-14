const carroDoJoao = {
    modelo: "Fiesta",
    fabricante: "Ford",
    Ano: 2020,
    anoFabricacao: 2019,
    acelerar: function(){
        console.log('vruumm');
    },
}

const carroDaMaria = {
    modelo: "Ka",
    fabricante: "Ford",
    Ano: 2022,
    anoFabricacao: 2020,
    acelerar: function(){
        console.log('vruumm');
    },
}

function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function(){
        console.log('Acelerar')
    }
}

const carrodoJoao2 = new Carro("Fiesta", "Ford", 2020, 2019);
const carroDaMaria2 = new Carro("Ka", "Ford", 2021, 2020)

const nome = "Gian";
const idade = 30;
const eMaiorDeIdade = true;
const conhecimentos = ["html", "css", "javascript"]

const pessoa = {
    nome: nome,
    idade: idade,
    eMaiorDeIdade: eMaiorDeIdade,
    conhecimentos: conhecimentos,
}

console.log(pessoa.nome); 

function exibeAtributo(nomeAtributo){
    console.log(pessoa[nomeAtributo])
}

if(pessoa.sobrenome){
    console.log('A pessoa tem um sobrenome')
}