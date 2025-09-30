//not
const notab = /[^ab]/; //nao aceita os que tiverem somenta a  ou b

console.log(notab.test("aqui tem ab"));
console.log(notab.test("11"));

const nottoaz = /[^a-z]/; //não aceita letras sozinhas
console.log(nottoaz.test("asd"));
console.log(nottoaz.test("asd1"));
console.log(nottoaz.test("a234"));

