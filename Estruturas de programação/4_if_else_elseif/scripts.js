
// if
let idade = 19;
if(idade > 18){
    console.log('Pode entrar!')
}

// if / else
let idade1 = 16;
if(idade1 > 18){
    console.log('Pode entrar!')
}else{
    console.log('Não pode entrar!')
}


// if / else / else if

let idade2 = 68;
let carteira = true;

if(idade2 >= 65){
    console.log('Idoso não deve dirigir')
}else if(idade2 > 18 && carteira == true){
    console.log('Pode dirigir!')
}else{
    console.log('Não pode dirigir!')
}