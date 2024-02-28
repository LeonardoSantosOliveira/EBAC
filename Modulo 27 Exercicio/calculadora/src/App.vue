<script setup>
  import Calculadora from './components/Calculadora.vue';
</script>

  <template>
    <main id="calc">
        <div class="container">
            <div class="row p-5 my-5">
                <div class="col-12">
                    <p class="text-center text">Calculadora Aritmética</p>
                </div>
                <Calculadora />
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
