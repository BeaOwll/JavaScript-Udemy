//assign
let carro = {
    portas: 2,
    portamalas: '200l',
    motor: '2.0'
}

let adicionais = {
    tetoSolar: true,
    arCondicionado: true,
}

console.log(carro); //sem propriedades de adicionais

Object.assign(carro, adicionais); //atribui propriedades de 'objeto adicionais' ao 'objeto carro'.

console.log(carro); //com propriedades de adicionais
