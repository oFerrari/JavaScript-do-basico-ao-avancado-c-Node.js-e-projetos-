const digitos = /\d+/;

console.log(digitos.exec("Tem o número 100 aqui"));
console.log(digitos.exec("Tem o número aqui"));

//Se a correspondência falhar, o exec() método retornará null e definirá o regex lastIndex como 0.