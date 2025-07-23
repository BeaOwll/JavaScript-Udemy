//Argumentos opcionais


function nomeComIdade(nome, idade){
    if (idade === undefined){
        console.log("Seu nome é  " + nome);
    }else{
        console.log("Seu nome é " + nome + "e voce tem "+ idade + " anos");
    }
}

//caso n passe a idade somente o nome sera apresentado
nomeComIdade('João');
nomeComIdade('João',42)