class Cachorro{
    constructor(raca){
        this.raca = raca;
    }

    get verRaca() {
    return "A raca é" + this.raca;
    }

    set novaRaca(value){
        this.raca = value;
    }
}

let golden = new Cachorro("Pastor Alemão");
console.log(golden.raca);
golden.novaRaca = "Golden"
console.log(golden.raca);

