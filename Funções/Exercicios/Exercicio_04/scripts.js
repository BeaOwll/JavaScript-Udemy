//Exercicio 04

//function numeroAleatorio(maximo){
//    return Math.random() * maximo;
//}

function numeroAleatorio(num){
    return Math.floor (Math.random() * num) + 1;
} 
//Math.floor() = arredonda para baixo
//Math.random() = wgera um numero aleatorio
//O papel do +1 é traze de volta para o numeromaximo, ja que, Math.floor()joga para um abaixo. 

console.log(numeroAleatorio(10));
console.log(numeroAleatorio(10));
console.log(numeroAleatorio(10));
console.log(numeroAleatorio(10));
console.log(numeroAleatorio(10));