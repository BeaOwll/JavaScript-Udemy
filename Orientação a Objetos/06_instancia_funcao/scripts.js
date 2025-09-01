function criarCachorro(raca){
    let cachorro = Object.create({});
    cachorro.raca = raca;
    return cachorro;
}

let doberman = criarCachorro("doberman");

console.log(doberman.raca);