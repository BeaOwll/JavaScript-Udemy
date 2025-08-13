const car = {
    "Brand": "BMW",
    "wheels": 4,
    "Doors": 2,
    "type": "Sedan"
}
//JSON.stringify()
let jasonParaString = JSON.stringify(car);
console.log(jasonParaString);
//JSON.parse()
let stringParaJson = JSON.parse(jasonParaString);
console.log(stringParaJson);