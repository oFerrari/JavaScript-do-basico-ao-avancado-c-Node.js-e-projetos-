let pessoa = {
    name: 'andrei',
    idade: 20,
    corre: () => {return ("Estou correndo")}
}

let {name: namePessoa, idade: idadePessoa, corre: correr} = pessoa

console.log(pessoa.name)
console.log(namePessoa)

console.log(pessoa.idade)
console.log(idadePessoa)

console.log(correr())

console.log("-------------------------------")

let carro = {
    nome: 'corolla',
    motor: '2.0',
    acelerar: () => {return ("Estou acelerando")}
}

let {acelerar} = carro

console.log(nome)
console.log(motor)
console.log(acelerar())
