const validarData = /^[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;

console.log(validarData.test("25/12/1025"));
console.log(validarData.test("25/12/15"));
console.log(validarData.test("2/2/1025"));
console.log(validarData.test("25/12/1025"));