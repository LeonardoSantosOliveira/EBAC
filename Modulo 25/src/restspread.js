function somar () {
    let soma = 0;

    for (let i = 0; i < arguments.length; i++){
        soma += arguments[i];
    }

    return soma;
}

console.log(somar(10, 20, 30, 40, 50))

//rest

function somarComRest(...numeros){
    let soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total
    },0)
    return soma;
}

console.log(somarComRest(10,20,30,40,50))

//spread

const numeros = [1,2,3,4,5]
console.log(...numeros)

const timesDeFutebolDeSp = ['Santos', "Palmeira", "Bragantino", "São Paulo"];
const timesDeFutebolDeRj = ["Vasco", "Botafogo", "Flamengo", "Fluminense"];

// const timesDeFutebol = timesDeFutebolDeSp.concat(timesDeFutebolDeRj);
const timesDeFutebol = [...timesDeFutebolDeSp, ...timesDeFutebolDeSp];

console.log(timesDeFutebol)

const carroDaJulia = {
    modelo: 'gol',
    marca: "vw",
    motor: 1.6
}

const carroDaAna = {
    ...carroDaJulia,
    motor: 1.8
}

console.log(carroDaJulia)
console.log(carroDaAna);

// Desestruturação

// const motorDoCarroDaAna = carroDaAna.motor;

const { motor: motorDoCarroDaAna} = carroDaAna;
const { motor: motorDoCarroDaJulia } = carroDaJulia;

console.log(motorDoCarroDaJulia);
console.log(motorDoCarroDaAna);

const [item1,item2, item3, ...outrosTimes] = timesDeFutebol;

console.log(item1)
console.log(item2)
console.log(item3)
console.log(outrosTimes)