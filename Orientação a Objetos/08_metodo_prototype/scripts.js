 function Cachorro(raca){
    this.raca = raca;
 }

 Cachorro.prototype.uivar = function(){
    console.log("AUUUUUUUUUUUUUUUUUU")
 }

 let pug = new Cachorro("pug");

 console.log(pug.raca);
 pug.uivar();