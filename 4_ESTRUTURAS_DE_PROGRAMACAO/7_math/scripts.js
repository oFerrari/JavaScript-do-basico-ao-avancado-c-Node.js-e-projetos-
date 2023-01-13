const read = require('readline-sync')

let n1 = read.questionInt("Informe um valor: ");
let n2 = read.questionInt("Informe um valor: ");
let n3 = read.questionInt("Informe um valor: ");
let n4 = read.questionInt("Informe um valor: ");

let meuMaior = Math.max(n1,n2,n3,n4);

console.log(meuMaior);

let maior = Math.max(6,12,28,55,8);

console.log(maior);

let menor = Math.min(6,12,28,55,8);

console.log(menor);

let arredondar = Math.round(5.2934723);

console.log(arredondar);

let arredondarParaCima = Math.ceil(5.2934723);

console.log(arredondarParaCima);

let arredondarParaBaixo = Math.floor(5.6934723);

console.log(arredondarParaBaixo);

let arredondarFixo = (5.2934723).toFixed(3);

console.log(arredondarFixo);

let somenteNumero = Math.trunc(15.2934723);

console.log(somenteNumero);