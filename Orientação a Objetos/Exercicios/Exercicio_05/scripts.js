//Exercicio 5

class ContaBancaria{
    constructor(SaldoContaCorrente, SaldoPoupanca, JurosPoupanca){
        this.SaldoContaCorrente = SaldoContaCorrente;
        this.SaldoPoupanca = SaldoPoupanca;
        this.JurosPoupanca = JurosPoupanca;
    }

    Deposito(valor){
        this.SaldoContaCorrente += valor;
    }

    Saque(valor){
        if(valor <= this.SaldoContaCorrente){
            this.SaldoContaCorrente -= valor;
        }
        else{
            console.log("Saldo insuficiente!");
        }
    }

    TransferenciaCP(valor){
        if(valor <= this.SaldoPoupanca){s
            this.SaldoPoupanca -= valor;
            this.SaldoContaCorrente += valor;
        }
        else{
            console.log("Saldo insuficiente!");
        }
    }

     TransferenciaCC(valor){
        if(valor <= this.SaldoPoupanca){s
            this.SaldoPoupanca += valor;
            this.SaldoContaCorrente -= valor;
        }
        else{
            console.log("Saldo insuficiente!");
        }
    }
}

class ContaEspecial extends ContaBancaria{
    constructor(SaldoContaCorrente, SaldoPoupanca, JurosPoupanca){
        super(SaldoContaCorrente, SaldoPoupanca, JurosPoupanca * 2);
        
    }
}

let conta = new ContaBancaria(1000,5000,1);

console.log(conta);

conta.Saque(500);

console.log(conta);

conta.Deposito(5000);

console.log(conta);

conta.TransferenciaCP(3000);

console.log(conta);

conta.TransferenciaCC();

console.log(conta);
