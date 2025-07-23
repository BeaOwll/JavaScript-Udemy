//escopo (valor de uma variavel dentro e fora da função)
let y  = 10; // y global

function imprimir(){
    let y=150;

    console.log(y); // y da função
}

imprimir(); //dentro

console.log(y);//fora