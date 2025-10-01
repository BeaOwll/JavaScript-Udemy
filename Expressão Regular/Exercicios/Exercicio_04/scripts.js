const reg1 = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(reg1.test("123.3.1.1"));//true
console.log(reg1.test("8.8.8.8"));//true
console.log(reg1.test("192.168.0.62"));//true

console.log(reg1.test("192.168.0"));//false
console.log(reg1.test("192"));//false
console.log(reg1.test("asdadasd"));//false
console.log(reg1.test("1235465"));//false
console.log(reg1.test("1235.4652.22.22222."));//false