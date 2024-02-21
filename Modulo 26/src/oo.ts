class Pessoa {
    nome:string
    renda?: number

    constructor(nome: string, renda?:number){
        this.nome = nome
        this.renda = renda
    }

    dizOla():string {
        return `${this.nome} disse oi`
    }
}

class ContaBancaria {
    protected saldo: number = 0;
    numeroConta: number;

    constructor(numeroConta: number) {
        this.numeroConta = numeroConta
    }

    static retornaNumeroDoBanco() {
        return 125
    }

    private getSaldo() {
        return this.saldo
    }

    depositar(valor:number) {
        this.saldo += valor;
    }
}

class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor: number): void {
        this.saldo = valor * 2;
    }
}

const contaDoLeonardo = new ContaBancaria(123456)
contaDoLeonardo.depositar(200)
ContaBancaria.retornaNumeroDoBanco()