/*const numeros = [1,2,3,4,5];

const total = numeros.reduce((acumulador, item) => acumulador += item ,0)

console.log(total)*/

// find

const time = [
    { id: 12, name: 'Topper Harley', piloto: true },
    { id: 3, name: 'Ramada Thompson', piloto: true },
    { id: 15, name: 'Pete Thompson', piloto: false },
    { id: 21, name: 'Kowalski', piloto: false },
]

const pilotos = time.find((itemAtual) => {
    return itemAtual.id == 21
})

console.log(pilotos)

const pizzas = [
    "Mussarela",
    "Calabresa",
    "Portuguesa",
    "Marguerita"
]

const foundPizza = pizzas.find( p => p.startsWith("M"))

console.log(foundPizza)

const frutas = [
    { nome: "Jaca", quantidade: 2},
    { nome: "Banana", quantidade: 0},
    { nome: "Cereja", quantidade: 5}
]

const foundFrutas = frutas.find( f => f.nome === 'Cereja')

console.log(foundFrutas)