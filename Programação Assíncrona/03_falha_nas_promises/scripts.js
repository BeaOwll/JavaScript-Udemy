let p = Promise.reject(new Error("Algo deu errado"));

console.log("Lalala");

p.then(value => console.log(value))
 .catch(reason => console.log("Erro: " + reason));