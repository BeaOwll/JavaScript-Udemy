const digitos = /\d+/;

console.log(digitos.exec("Tem o numero 100 aqui"));//treu pois tem numeros
console.log(digitos.exec("Tem o numero aqui"));//false pois não tem