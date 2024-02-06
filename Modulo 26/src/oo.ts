class Pessoa {
    nome: string;
    renda?: Number;

    constructor(nome: string, renda?: number){
        this.nome = nome;
        this.renda = renda;
    }

    disOla(): string {
        return `${this.nome} disse oi!`
    }
}

class ContaBancaria {
    protected saldo: number = 0;
    numeroConta: number;

    constructor(saldo:number, numeroConta: number){
        this.numeroConta = numeroConta;
    }

    getSaldo() {
        return this.saldo;
    }

    depositar(valor: number){
        this.saldo += valor;
    }
}

class contaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor: number): void {
        this.saldo = valor * 2
    }
}

const contaDoPedro = new contaBancariaPessoaFisica(123456);
 