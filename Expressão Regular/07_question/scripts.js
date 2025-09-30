//question (?)
const padrao = /Abacax?i/ //letra x se tornou opcional

console.log(padrao.test("Abacaxi"));
console.log(padrao.test("Abacai"));