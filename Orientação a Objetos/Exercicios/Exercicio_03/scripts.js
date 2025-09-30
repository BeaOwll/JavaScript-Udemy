//Exercicio 1
class Endereco{
    constructor(rua,bairro, cidade, estado){
        this.rua = rua;
        this.bairro = bairro;
        this;cidade = cidade;
        this.estado = estado;
    }

    set novaRua(novaRua){
        this.rua = this.novaRua;
    }

    set novobairro(novobairro){
        this.bairro = this.novobairro;
    }

    set novaCidade(novaCidade){
        this.cidade = this.novaCidade;
    }

    set novoEstado(novoEstado){
        this.estado = this.novoEstado;
    }
}

let endereco = new Endereco("Rua das gaivotas", "Terrario", "São Joaquim","SC");

console.log(endereco);