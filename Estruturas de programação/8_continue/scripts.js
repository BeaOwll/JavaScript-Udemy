// Continue
for(let i = 10; i > 0; i--){
    if(i % 2 == 0){
        console.log("Caiu no continue");
        continue; // ao inves de printar os pares ele mostra um texto e passa pro proximo
    }
    console.log(i);
}
