//exercicio 4 (exercicio 3)

//exercicio 03
let onibus= {
    rodas: 8,
    limitePassageiros : 40,
    Portas : 2,
}

console.log(onibus.rodas);
console.log(onibus.limitePassageiros);
console.log(onibus.Portas);

//Exercicio 4
onibus.janelas = 20;

delete onibus.rodas;

console.log(onibus.janelas)
console.log(onibus)

