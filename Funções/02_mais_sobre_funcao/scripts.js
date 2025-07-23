//Função com return
function multiplicarTresNumeros(x,y,z){
    return x * y * z;
}

console.log(multiplicarTresNumeros(2,2,2)); //cham ado direto no console

const mult = multiplicarTresNumeros(2,2,2); //atrelado a variavel

//Função com If e Else
function podeDirigir(idade, cnh){
    if(idade >= 18 && cnh == true){
        console.log("Pode dirigir");
    } else{
        console.log("Não pode dirigir!");
    }
}

console.log(podeDirigir(19, true));
console.log(podeDirigir(25, true));
console.log(podeDirigir(44, 0)); // 0 = false
console.log(podeDirigir(19, 1)); // 1 = true
console.log(podeDirigir(17, false));