//Exercicio 1
class Carrinho {
    constructor (itens,qtd,vtotal){
        this.itens = itens;
        this.qtd = qtd;
        this.vtotal = vtotal; 
    }
}

let carrinho = new Carrinho([
    {
        id: 1,
        nome:"Camisa",
        qtd:1,
        preco: 20,
    },
    {
        id: 2,
        nome:"Calça",
        qtd:2,
        preco: 50,
    }

], 3, 120);

console.log(carrinho);
