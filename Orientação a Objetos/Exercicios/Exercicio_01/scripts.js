//Exercicio 1
class Conta{
    constructor (saldo) {
        this.saldo = saldo;
    }

    depositar(valor){
        this.saldo += valor;
    }

    sacar(valor){
        if ( valor > this.saldo){
            console.log("Saldo insuficiente");
        } else{
            this.saldo -= valor; 
        }
    }
}

let conta = new Conta(1000);

conta.depositar(500);
conta.sacar(2000);

console.log(conta.saldo);