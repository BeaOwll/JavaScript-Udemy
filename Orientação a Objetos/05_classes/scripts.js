let cachorro = {
    patas: 4,
    raca: "SRD",
    latir: function(){
        console.log("AU AU AU AU AU AU!");
    },
}

let labrador = Object.create(cachorro);

labrador.latir();

labrador.raca = "Labrador"

console.log(labrador.raca)