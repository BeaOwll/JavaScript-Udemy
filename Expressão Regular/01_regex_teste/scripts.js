
//Padrão 1:
//cria expessão regular chamada "bola"
const reg1 = new RegExp('bola');

//variavel.test("fase") = verifica se a frase tem a palavra contida na variavel.
console.log(reg1.test('Tem bola?')); //true (bola esta presente na frase)
console.log(reg1.test('Não tem')); //false (bola não esta presente na frase)

//Padrao 2:
//cria expessão regular chamada "Bea"
const reg2 = /Bea/;

//verificação em uma frase
console.log(reg2.test('Bea esta bonita hj'));
console.log(reg2.test('Ela é muito amigavél'));

//Verificação em uma variavel
let = text = "Eu sou a Bea";

console.log(reg2.test(text));

//tambem da pra criar a expressão regular direto no código
console.log(/quadrado/.test("Meu quarto é quadrado"));
console.log(/quadrado/.test("Meu quarto é cinza"));
