//Função sem parametros
function imprimirNoConsole(){
    console.log('Imprimir no Console: \n Ola mundo!!!');
}

imprimirNoConsole();

//Função com parametros
function imprimirUmNumero(x){ 
    console.log("O numero é: " + x);
}

//Função com uma variavel atrelada a função
imprimirUmNumero(2); //'x' sera informado ao invocar a função.

//numeroAleatorio = variavel do tipo const recebendo uma function
const numeroAleatorio = function(){
    console.log(Math.random());Math.random() //que imprime numeros aleatórios
}

numeroAleatorio();
