//Escopo aninhado
//todas as variaveis tem o mesmo nome 'a', mas são diferentes
let a = 10;

function multiplicar(x,y){
    let a = x *y; //variavel da function

    if (a > 10){ //se a da funcao for maior que 10 ira printar
        let a = 0; //variavel do if
        a++;
        console.log(a); //variavel do if
    }

    console.log(a); //variavel da function
}

console.log(a); //variavel global

multiplicar(2,10);