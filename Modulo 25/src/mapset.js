let meuMap = new Map();
meuMap.set("Nome", "Leonardo");
meuMap.set("Stack", "HTML, CSS, JS");

console.log(meuMap);

const nome = meuMap.get("Nome")

console.log(nome);

console.log(meuMap.size)

console.log(meuMap.has("Nome"))

// meuMap.clear();

console.log(meuMap.size)

for (let chave of meuMap.keys()) {
    console.log(chave)
}

for (let valor of meuMap.values()) {
    console.log(valor)
}

for (let entrada of meuMap.entries()) {
    console.log(entrada)
}

for (let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`)
}

meuMap.delete("Stack")

console.log(meuMap);

//set

const cpfs = new Set();

cpfs.add('11663706077');
cpfs.add('59240130063');
cpfs.add('77205431069');

cpfs.forEach((valor) => {
    console.log(valor)
})

const array = ['Gian Souza', "Jose Paulo", "Maria Isabel", "Luana", "Luana", "Gian Souza"];

const arrayComoSet = new Set([...array]);

const arraySemItensDuplicados = [...arrayComoSet]