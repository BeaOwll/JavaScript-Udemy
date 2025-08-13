//Rest Operator
let num = 1;
let num1 = 5;
let num2 = 3;
let num3 = 4;

function imprimirNumeros(...args){
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
}

imprimirNumeros(num,num1,num2,num3);
console.log('___________________')
imprimirNumeros(num2,num3);
console.log('___________________')
imprimirNumeros(1,2,4,5,6,5,1000,25);
console.log('___________________')