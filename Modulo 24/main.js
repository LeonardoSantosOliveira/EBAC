const carroDoJoao = {
    modelo: "Fiesta",
    fabricante: "Ford",
    anoModelo: 2020,
    anoFabricacao: 2019,
    acelerar: function(){
        console.log('vruum');
    }
}

const carroDaMaria = {
    modelo: "Ka",
    fabricante: "Ford",
    anoModelo: 2021,
    anoFabricacao: 2020,
    acelerar: function(){
        console.log('vruum')
    }
}

function Carro(modelo, fabricante, anoModelo, anoFabricacao){
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function(){
        console.log('Acelerar')
    }
}

const carroDoJoao2 = new Carro("Fiesta", "Ford", 2020, 2019);
const carroDaMaria2 = new Carro("Ka", "Ford", 2021, 2020);

console.log(carroDoJoao2);
console.log(carroDaMaria2.acelerar());

const nome = "Leonardo";
const idade = 25;
const maiorDeIdade = true;
const conhecimentos = ["HTML", "CSS", "JAVASCRIPT", "BOOTSTRAP", "SASS", "GULP", "GIT/GITHUB", "JQUERY"]

const pessoa = {
    nome: nome,
    idade: idade,
    maiorDeIdade: maiorDeIdade,
    conhecimentos: conhecimentos,
}


function exibeAtributo(nomeAtributo){
    console.log(pessoa[nomeAtributo]);
}

exibeAtributo('idade');

pessoa.sobrenome = null;

console.log(pessoa.nome);

Object.freeze(pessoa);

pessoa['nome'] = 'Joao';

if(pessoa['sobrenome']){
    console.log('A pessoa tem um sobrenome');
}

if ('sobrenome' in pessoa){
    console.log('Tem sobrenome');
}

    console.log(pessoa.nome);


    console.log(Object.keys(pessoa).length)
    console.log(Object.values(pessoa));