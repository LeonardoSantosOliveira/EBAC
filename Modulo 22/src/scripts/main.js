AOS.init();

const dataDoEvento = new Date("dec 12, 2023 19:00:01")
const timestampDoEvento = dataDoEvento.getTime()

const contaHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaEvento = timestampDoEvento - timeStampAtual;

    const diasAteEvento = Math.floor(distanciaEvento / (1000 * 60 * 60 * 24))
    const horasAteEvento = Math.floor((distanciaEvento % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutosAteEvento = Math.floor((distanciaEvento % (1000 * 60 * 60)) / (1000 * 60))
    const segundosAteEvento = Math.floor((distanciaEvento % (1000 * 60)) / 1000)

    document.getElementById('contador').innerHTML = `${diasAteEvento}H ${horasAteEvento}H ${minutosAteEvento}M ${segundosAteEvento}S`

    if (distanciaEvento < 0){
        clearInterval(contaHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado!'
    }

},1000)