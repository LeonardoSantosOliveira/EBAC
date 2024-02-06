"use strict";
class Pessoa {
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    disOla() {
        return `${this.nome} disse oi!`;
    }
}
class ContaBancaria {
    constructor(saldo, numeroConta) {
        this.saldo = 0;
        this.numeroConta = numeroConta;
    }
    getSaldo() {
        return this.saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
}
class contaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor) {
        this.saldo = valor * 2;
    }
}
const contaDoPedro = new contaBancariaPessoaFisica(123456);
