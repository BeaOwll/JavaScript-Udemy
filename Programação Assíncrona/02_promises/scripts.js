//criando promise
let p = Promise.resolve(5);

console.log("Outros códigos");
console.log(p);

//Executando promessa
p.then((value) => {console.log(`O valor é  ${value}`)});