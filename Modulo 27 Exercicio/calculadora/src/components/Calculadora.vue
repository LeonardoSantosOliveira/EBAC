<script setup>
import { reactive } from 'vue';

const estado = reactive({
    numero1: 0,
    numero2: 0,
    resultado: 0,
    op: '+',
})

const adicionaNumero = (e, numeroCx) => {
    const propriedade = `numero${numeroCx}`;
    estado[propriedade] = parseFloat(e.target.value);
    realizaOperacao()
}

const capturaOperador = (e) => {
    const operador = e.target.value;
    estado.op = operador;
    realizaOperacao();
}

const realizaOperacao = () => {
    let { op, numero1, numero2 } = estado
    if (op == '+') {
        estado.resultado = parseFloat(numero1 + numero2)
    } else if (op == '-') {
        estado.resultado = parseFloat(numero1 - numero2)
    } else if (op == '*') {
        estado.resultado = parseFloat(numero1 * numero2)
    } else if (op == '/') {
        estado.resultado = parseFloat(numero1 / numero2)
    }
}
</script>

<template>
    <div class="col-md-3">
        <input @change="e => adicionaNumero(e, '1')" class="form-control" type="number" placeholder="Primeiro número">
    </div>
    <div class="col-md-3">
        <select @change="capturaOperador" class="form-control text-center">
            <option selected value="+">+</option>
            <option value="-">-</option>
            <option value="*">x</option>
            <option value="/">/</option>
        </select>
    </div>
    <div class="col-md-3">
        <input @change="e => adicionaNumero(e, '2')" class="form-control" type="number" placeholder="Segundo número">
    </div>
    <div class="col-md-3 resultado">
        <span> = </span>
        <span class="total"> {{ estado.resultado }}</span>
    </div>
</template>