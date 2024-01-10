// function Pokemon(nome, tipo) {
//     this.nome = nome;
//     this.tipo = tipo;
// }

// const pikachu = new Pokemon("Pikachu", "Elétrico");

class Pokemon {
    // tipo = '';
    // nome = '';
    #hp = 100;


    constructor(nome,tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }

    atacar(nomeDoAtaque) {
        console.log(`${this.nome} atacou com ${nomeDoAtaque}`)
    }

    recebeuAtaque() {
        this.hp -= 10;
    }

    exibeHp() {
        console.log(this.#hp)
    }
}

class Pikachu extends Pokemon {
    constructor() {
        super('Pikachu', "Elétrico")
    }

    atacar() {
        console.log(`${this.nome} atacou com Choque do Trovão}`)
    }
}

const pikachuDoAsh = new Pikachu()
const pikachu = new Pokemon("Pikachu", "Elétrico");

console.log(pikachu);
// pikachu.atacar('Choque do trovão');

console.log(pikachuDoAsh)

console.log(pikachuDoAsh.hp)
pikachuDoAsh.recebeuAtaque()
console.log(pikachuDoAsh.hp)
pikachuDoAsh.atacar()
pikachuDoAsh.exibeHp();