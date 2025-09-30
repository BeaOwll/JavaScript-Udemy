//definindo um conjunto de regex
const reg1 = /[12345]/;

console.log(reg1.test("Temos o numero 6"));
console.log(reg1.test("Temos o numero 2"));
console.log(reg1.test("Temos o numero 23"));
console.log(reg1.test("Temos o numero 60"));

//outra forma de defininr um, conjunto
const reg2 = /[0-8]/

console.log(reg1.test("Temos o numero 9"));
console.log(reg1.test("Temos o numero 5"));