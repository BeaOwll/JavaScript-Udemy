//exercicio 08

function tamanhoTexto(texto){
    if (texto.length > 10){
        console.log("Texto muito longo");
    }else{
        console.log("Texto dentro do limite");
    }
    console.log(texto.length);
}

tamanhoTexto("Ola Mundo Sou Bea a BRABA");
tamanhoTexto("Ola");