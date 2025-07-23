//Recursion

//Função retornarPar => chama ela mesma com o valor de n-1 (caso o numero seja impar), convertendo para par
function retornarPar(n){
    if(n % 2 == 0){
        console.log('N agora é par: ' + n);
    } else{
        console.log(n);
        retornarPar(n-1);
    }
}

retornarPar(33)