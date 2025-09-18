/* 3-
arr = [1,2,3,4,5,6];
let somaPar = 0;
for (let i=0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
        somaPar += arr[i];
    }
}*/


/* 2-
function inverterString(str){
    return str. split("").reverse(),join("");
}

console.log(inverterString("nubank")); */

/* 3-
function palindromo(str){
    let invertida = str.split("").reverse().join("");
    return str === invertida;
}

console.log(palindromo("arara"));
console.log(palindromo("arco")); */

function contarVogais(str){
    let soma = 0;
    let vogais  = "aeiou";

    for(let i = 0; i < str.length; i++){
        if(vogais.includes(str[i].toLowerCase())) {
            soma ++;
        }
    }

    return soma;
}

console.log(contarVogais("engenharia de software"));