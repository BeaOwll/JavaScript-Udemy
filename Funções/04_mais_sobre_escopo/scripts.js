//Escopo  em if

let x = 10; // fora do if

if(x > 5){
    let x = 20; // dentro do if
    x++ // somara 1 ao x que ja vale 20
    console.log(x); // dentro do if
}

console.log(x) // fora do if