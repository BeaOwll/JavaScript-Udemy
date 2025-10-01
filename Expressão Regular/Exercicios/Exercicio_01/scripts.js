//varifica se há letras maiusculas
const reg1 = /[A-Z]/;

console.log(reg1.test("PAULA"));//true
console.log(reg1.test("ana"));//false
console.log(reg1.test("1234"));//false

const reg2 = /[^A-Z]+$/;

console.log(reg2.test("PAULA"));//true
console.log(reg2.test("ana"));//false
console.log(reg2.test("1234"));//false