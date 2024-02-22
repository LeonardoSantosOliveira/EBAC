<script setup>
  import { reactive } from 'vue';

  const nome = "Leonardo";
  const meuObj = {
    nome: "Leonardo Santos",
    jogo: "Dredge"
  }

  const fotoDoBatman = "data:image/png;base64,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"
  const fotoDoSuperman = "https://thumbs.dreamstime.com/b/logotipo-superman-%C3%A9-um-super-her%C3%B3i-ficcional-que-apareceu-pela-primeira-vez-em-quadrinhos-americanos-publicados-dc-personagem-204759411.jpg"
  
  function dizOi(nome) {
    return `${nome} diz oi!`
  }

  const botaoEstaDesabilitado = true

  const gostaBatman = true;
  const gostaSuperman = true;

  const estaAutorizado = true

  const estado = reactive({
    contador: 0,
    email: '',
    saldo: 5000,
    transferindo: 0,
    nomes: ['leonardo', 'soraya', 'gian', 'lia', 'mayara', 'luciano'],
    nomeAInserir: '',
  })
  
  function incrementar(){
    estado.contador++
  }

  function decrementar(){
    if(estado.contador > 0) {
      estado.contador--
    }
  }

  function alteraEmail(e){
    return estado.email = e.target.value
  }

  function mostraSaldoFuturo() {
    const {saldo, transferindo} = estado;

    return saldo - transferindo
  }

  function validaValorTransferencia() {
    const {saldo, transferindo} = estado
    
    return saldo > transferindo
  }

  function cadastraNome() {
    if(estado.nomeAInserir.length > 3){
      estado.nomes.push(estado.nomeAInserir)
    } else{
      alert("Digite um nome válido!")
    }
  }

</script>

<template>
  <h1>{{ dizOi(meuObj.nome) }}</h1>

  <img v-if="gostaBatman" :src="fotoDoBatman" alt="">
  <img v-else-if="gostaSuperman" :src="fotoDoSuperman" alt="">
  <h1 v-else>Não gosta de heróis da DC</h1>

  <button :disabled="botaoEstaDesabilitado" >Enviar mensagem</button>

  <h1 v-if="estaAutorizado">Bem-Vindo</h1>
  <h2 v-else>Você não está autorizado</h2>

  <br><hr>

  {{ estado.contador }}
  <button @click="incrementar" type="button">+</button>
  <button @click="decrementar" type="button">-</button>

  <br><hr>

  {{ estado.email }}
  <br><input type="email" @keyup="alteraEmail">

  <br><hr>


  saldo: {{ estado.saldo }}<br>
  transferindo: {{estado.transferindo }}<br>
  saldo apos transferencia: {{ mostraSaldoFuturo() }}<br><br>
  <input class="campo" :class="{invalido : !validaValorTransferencia()}" @keyup="evento => estado.transferindo = evento.target.value" type="number" placeholder="quantia para transferir"><br>
  <button v-if="validaValorTransferencia()">Transferir</button>
  <span v-else>Valor maior que o saldo!</span>

  <br><hr>

  <ul>
    <li v-for="nome in estado.nomes">
      {{ nome }}
    </li>
  </ul>

  <input @keyup="evento => estado.nomeAInserir = evento.target.value" type="text" placeholder="Digite um novo nome">
  <button id="botaoNomes" @click="cadastraNome" type="button">Cadastrar nome</button>
</template>

<style scoped>
  img{
    width: 200px;
  }

  .invalido {
    outline-color: red;
    border-color: red;
    background-color: rgb(255, 133, 133);
  }

  .campo{
    padding: 4px;
    border: 2px solid #000;
  }
</style>
