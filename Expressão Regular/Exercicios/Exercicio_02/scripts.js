const reg1 = /\w+id$/;

console.log(reg1.test("PAULAid"));//true
console.log(reg1.test("idana"));//false
console.log(reg1.test("1234id"));//true