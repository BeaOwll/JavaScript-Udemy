const reg1 = /Marca: (Nike|Adidas|Puma|Asics)/;

console.log(reg1.test("Marca: Nike"));
console.log(reg1.test("Marca: Adidas"));
console.log(reg1.test("Marca:"));