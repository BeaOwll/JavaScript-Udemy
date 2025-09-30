//ocorrencia precisa
const cep = /\d{5}-\d{3}/; //minimo

console.log(cep.test("881177-500"));
console.log(cep.test("881-50"));