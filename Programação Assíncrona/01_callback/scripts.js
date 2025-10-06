//callback
console.log("Ainda não chamou a callback");

setTimeout(function(){
    console.log("Chamou callback");
}, 2000);

console.log("Ainda não chamou a callback");