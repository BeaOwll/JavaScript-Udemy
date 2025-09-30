// Ponto (aceita qualquer coisa dentro de test()
cont = pontoRegEx = /./;

console.log(".")
console.log(pontoRegEx.test("asd"));
console.log(pontoRegEx.test(" "));
console.log(pontoRegEx.test("123"));
console.log(pontoRegEx.test("123sad"));

// \d = qualquer dígito de caractere (0-9);
const dRegEx = /\d/;

console.log("d")
console.log(dRegEx.test("asd"));//false
console.log(dRegEx.test(" "));//false
console.log(dRegEx.test("123"));//true
console.log(dRegEx.test("123sad"));//true

// \D = Caracteres que não são digitos (0-9)
const DRegEx = /\D/;

console.log("D")
console.log(DRegEx.test("asd"));//true
console.log(DRegEx.test(" "));//true
console.log(DRegEx.test("123"));//false
console.log(DRegEx.test("123sad"));//true

// \s = qualquer caractere de espeço em branco
const sRegEx = /\s/;

console.log("s")
console.log(sRegEx.test("asd"));//false
console.log(sRegEx.test(" "));//false
console.log(sRegEx.test("123"));//true
console.log(sRegEx.test("123sad"));//false

// \S = caractere que não seja espaço em branco
const SRegEx = /\S/;

console.log("S")
console.log(SRegEx.test("asd"));//true
console.log(SRegEx.test(" "));//false
console.log(SRegEx.test("123"));//true
console.log(SRegEx.test("123sad"));//true

// \w = em caractere alfanumérico("teste")
const wRegEx = /\w/;

console.log("w")
console.log(wRegEx.test("asd"));//true
console.log(wRegEx.test(" "));//false
console.log(wRegEx.test("123"));//true
console.log(wRegEx.test("123sad"));//true

// \W = em caractere não-alfanumérico
const WRegEx = /\W/;

console.log("W")
console.log(WRegEx.test("asd"));//false
console.log(WRegEx.test(" "));//true
console.log(WRegEx.test("123"));//false
console.log(WRegEx.test("123sad"));//false