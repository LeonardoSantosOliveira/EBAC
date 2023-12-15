function Console(processador, gpu, fonte, memoria, armazenamento){
    this.processador = processador;
    this.gpu = gpu;
    this.fonte = fonte;
    this.memoria = memoria;
    this.armazenamento = armazenamento;
    this.ligar = function(){
        console.log("Ligou");
    }
    this.desligar = function(){
        console.log("Desligou");
    }
}

function Xbox(processador, gpu, fonte, memoria, armazenamento ,fabricante, cor, modelo, os, id, senha){
    this.fabricante = fabricante;
    this.cor = cor;
    this.modelo = modelo;
    this.os = os;
    this.id = id;
    let _senha = senha;
    this.getSenha = function(){
        return _senha;
    }
    this.setSenha = function(valor){
        let novaSenha = valor;
        _senha = novaSenha;
    }
    this.conectar = function(){
        console.log("Conectou à Xbox Live");
    }
    Console.call(this, processador, gpu, fonte, memoria, armazenamento)
}

function Playstation(processador, gpu, fonte, memoria, armazenamento ,fabricante, cor, modelo, os, id, senha){
    this.fabricante = fabricante;
    this.cor = cor;
    this.modelo = modelo;
    this.os = os;
    this.id = id;
    let _senha = senha;
    this.getSenha = function(){
        return _senha;
    }
    this.setSenha = function(valor){
        let novaSenha = valor;
        _senha = novaSenha;
    }
    this.conectar = function(){
        console.log("Conectou à Playstation Network");
    }
    Console.call(this, processador, gpu, fonte, memoria, armazenamento)
}

function Nintendo_Switch(processador, gpu, fonte, memoria, armazenamento ,fabricante, cor, modelo, os, id, senha){
    this.fabricante = fabricante;
    this.cor = cor;
    this.modelo = modelo;
    this.os = os;
    this.id = id;
    let _senha = senha;
    this.getSenha = function(){
        return _senha;
    }
    this.setSenha = function(valor){
        let novaSenha = valor;
        _senha = novaSenha;
    }
    this.conectar = function(){
        console.log("Conectou à Playstation Network");
    }
    Console.call(this, processador, gpu, fonte, memoria, armazenamento)
}

const xboxDoLeonardo = new Xbox("AMD", "AMD 12TF", "750W", "16GB", "1TB", "Microsoft", "Preto", "Series X", "Windows 10", "HAGAKA", "SereiDev1234");
const xboxDaSoraya = new Xbox("AMD", "AMD 4TF", "500W", "10GB", "512TB", "Microsoft", "Branco", "Series S", "Windows 10", "SosoGamer", "SenhaMuitoCriativa4231");
const playstationDoGian = new Playstation("AMD", "AMD", "750W", "16GB", "512TB", "Sony", "Branco", "PS5 Disco", "N/C", "GianProfessor", "DandoAula5")
const playstationDoLeonardo = new Playstation("AMD", "AMD", "750W", "16GB", "1TB", "Sony", "Branco", "PS5 Digital", "N/C", "HAGAKA", "SereiDev4321")
const nintendoDoLeonardo = new Nintendo_Switch("NVIDIA ", "GeForce", "300W", "4GB", "32GB", "Nintendo", "Vermelho/Azul", "Switch OLED", "Horzion", "HAGAKA", "NuncaJogueiZelda777666")