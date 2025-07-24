//Mutação
let pessoa ={
    nome: "Beatriz",
}

let pessoa3 ={
    nome: 'Beatriz',
}

let pessoa2 = pessoa;

console.log(pessoa == pessoa2);  // true, pois apontam para o mesmo objeto (mesma referência)
console.log(pessoa == pessoa3);  // false, apesar do conteúdo igual, são objetos diferentes na memória