//Exercicios 10

let calculadora = {
    somar: function somar(x,y){
        return x+y;
    },

    subtrair: function subtrair(x,y){
        return x-y;
    },

    multiplicar: function multiplicar(x,y){
        return x*y;
    },

    dividir: function dividir(x,y){
        return x/y;
    }
}

console.log( calculadora.somar(2,2));
console.log( calculadora.subtrair(2,2));
console.log( calculadora.multiplicar(2,2));
console.log( calculadora.dividir(2,2));