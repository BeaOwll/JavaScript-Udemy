//Exercicio 06

function tipoDeDado(dado){
    if (typeof dado === "boolean"){
        console.log(`${dado} é um Boolean`);
    }else if(typeof dado === "number"){
        console.log(`${dado} é um Number`);
    }else if(typeof dado === "string"){
        console.log(`${dado} é um String`);
    }else {
        console.log(`${dado} é de outro tipo`);
    }
}

tipoDeDado("Ana Beatriz");
tipoDeDado(10);
tipoDeDado(true);
