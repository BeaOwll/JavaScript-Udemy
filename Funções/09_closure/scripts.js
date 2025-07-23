
// linha 7: função 'a' que recebe um valor x e guarda na memória

// linha 8: função 'b' retornada, que "lembra" do valor x (armazenado pela função 'a')

// linha 9: retorna a soma de x (armazenado) com y (novo valor)
function lembrarSoma(x) { 
    return function(y) {  
        return x + y;     
    };
}

let soma1 = lembrarSoma(2); // armazena a função 'b', com x fixo em 2

console.log(soma1(2)); // chama a função armazenada, somando 2 (x) + 2 (y)

let soma2 = lembrarSoma(5);

console.log(soma2(2));