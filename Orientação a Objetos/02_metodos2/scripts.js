const cachorro = {

    raca: "SRD",
    setRaca: function(raca){
        this.raca = raca;
    },

    getRaca: function(){
        console.log(this.raca); 
    },
}

console.log(cachorro.raca);
cachorro.setRaca("Buldogue")
console.log(cachorro.raca);
cachorro.getRaca();
