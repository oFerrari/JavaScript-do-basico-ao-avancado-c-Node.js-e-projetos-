let calculadora = {
    somar: function (n1,n2) {return n1+n2},
    multiplicar: function (n1,n2) {return n1*n2},
    subtrair: function (n1,n2) {return n1-n2},
    dividir: function (n1,n2) {return n1/n2},
}

console.log(calculadora.somar(2,5))
console.log(calculadora.multiplicar(2,5))
console.log(calculadora.dividir(2,5))
console.log(calculadora.subtrair(5,2))
