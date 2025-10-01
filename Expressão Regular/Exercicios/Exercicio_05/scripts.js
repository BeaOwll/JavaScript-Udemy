const regUser = /^[\w-]{3,16}$/;

console.log(regUser.test("ana"));//true
console.log(regUser.test("joao_123"));//true
console.log(regUser.test("user-name"));//true
console.log(regUser.test("a1")); //false
console.log(regUser.test("nome_com_muitos_caracteres")); //false
console.log(regUser.test("teste@123"));// false