<script setup>
import { reactive } from 'vue';


  const estado = reactive({
    numero1: 0,
    numero2: 0,
    resultado: 0,
    op: '+',
  })

  const adicionaNumero = (e,numeroCx) => {
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
    let {op, numero1, numero2} = estado
    if (op == '+'){
      estado.resultado = parseFloat(numero1 + numero2)
    } else if (op == '-'){
      estado.resultado = parseFloat(numero1 - numero2)
    } else if (op == '*'){
      estado.resultado = parseFloat(numero1 * numero2)
    } else if (op == '/'){
      estado.resultado = parseFloat(numero1 / numero2)
    }
  }

</script>

  <template>
    <main id="calc">
        <div class="container">
            <div class="row p-5 my-5">
                <div class="col-12">
                    <p class="text-center text">Calculadora Aritmética</p>
                </div>
                <div class="col-md-3">
                    <input @change="e => adicionaNumero(e, '1')" class="form-control" type="number"
                        placeholder="Primeiro número">
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
                    <input @change="e => adicionaNumero(e, '2')" class="form-control" type="number"
                        placeholder="Segundo número">
                </div>
                <div class="col-md-3 resultado">
                    <span> = </span>
                    <span class="total"> {{ estado.resultado }}</span>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>

#calc{
  display: flex;
  justify-content: center;
  align-items: center;
}

.text {
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 20px;
}

.resultado{
  display: flex;
  justify-content: start;
  align-items: center;
  font-weight: bold;
}

.total{
  margin-left: 10px;
}
</style>
