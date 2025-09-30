//regEx tem que ter 2 digitos (ou  mais)
const dia = /\d\d/; 

console.log(dia.test("2019"));
console.log(dia.test("asd"));
console.log(dia.test("05"));
console.log(dia.test("sd12"));


const palavrasPeloMenosTresLetras = /\w\w\w/;

console.log(palavrasPeloMenosTresLetras.test("2019"));
console.log(palavrasPeloMenosTresLetras.test("asd"));
console.log(palavrasPeloMenosTresLetras.test("05"));
console.log(palavrasPeloMenosTresLetras.test("sd12"));

