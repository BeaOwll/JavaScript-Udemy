class Cachorro{
    constructor(raca){
        this.raca = raca;
    }
}

let patas = Symbol();

Cachorro.prototype[patas] = 4;

let goldem = new Cachorro("Golden Retriever");


//Acessando symbol
console.log(Cachorro.prototype[patas]);