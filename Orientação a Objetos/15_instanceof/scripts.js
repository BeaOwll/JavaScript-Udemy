class Mamifero{
    constructor(patas){
        this.patas = patas;
    }
}


class Cachorro extends Mamifero{
    constructor(patas, raca){
        super(patas, patas);
        this.raca = raca;
    }

    latir(){
        console.log("AU AU");
    }
}

 let pug = new Cachorro(4,"Pug");


 //instanceof

 console.log(new Cachorro instanceof Mamifero); //true = cachorro é filho de mamifero