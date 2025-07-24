//Propriedades Objetos
let pessoa = {
    nome: "Beatriz",
    profissao: "Programadora",
    idade: 24,
}

console.log(pessoa.nome);

delete pessoa.nome; //deleta propriedade

console.log(pessoa.nome) //propriedade passa a ser undefined

pessoa.casado = false; //inclui/adiciona propriedade casado e atribui valor falso a ela

console.log(pessoa.casado);