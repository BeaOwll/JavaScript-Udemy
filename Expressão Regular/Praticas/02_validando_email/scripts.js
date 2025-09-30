const validaEmail = /\w+@\w+\.\w+/;

console.log(validaEmail.test("beatriz@gmail.com"));
console.log(validaEmail.test("beatriz@gmail"));
console.log(validaEmail.test("@gmail.com"));