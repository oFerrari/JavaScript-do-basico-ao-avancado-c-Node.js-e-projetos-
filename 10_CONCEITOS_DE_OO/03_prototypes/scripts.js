const pessoa = {
    pernas: 2,
}

console.log(Object.getPrototypeOf(pessoa))
console.log(Object.getPrototypeOf(pessoa) == Object.prototype)
console.log(pessoa.hasOwnProperty('pernas'))
