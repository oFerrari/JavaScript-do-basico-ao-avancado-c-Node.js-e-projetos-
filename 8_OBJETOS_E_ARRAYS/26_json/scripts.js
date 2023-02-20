pessoa = {
    "nome":"andrei",
    "idade":"28"
}

let {Pnome = "nome"} = pessoa
let {idade} = pessoa

console.log(pessoa.nome)
console.log(Pnome)

console.log(pessoa.idade)
console.log(idade)