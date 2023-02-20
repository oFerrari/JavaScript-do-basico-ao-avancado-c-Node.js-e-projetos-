let humano = {
    nome: "Andrei Ferrari",
    idade: 11,
    cargo: "corró"
}

console.log(humano.nome)
console.log(humano.cargo)

delete humano.cargo

console.log(humano.cargo)

humano.solteiro = true

console.log(humano)
console.log(humano.solteiro)