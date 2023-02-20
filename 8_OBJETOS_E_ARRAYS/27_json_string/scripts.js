pessoa = {
    "nome":"andrei",
    "idade":"28",
    "porcas": ["suzi","titcha","dora"]
}

let {porcas} = pessoa

console.log(pessoa.porcas)

console.log(porcas)

console.log("--------------------------------")

let pessoaTexto = JSON.stringify(pessoa)    //Virou String

console.log(pessoaTexto)       
console.log(pessoaTexto.nome)               //[UNDEFINED]   

let pessoaJSON = JSON.parse(pessoaTexto)    //Virou Objeto

console.log(pessoaJSON)        



//Mais Rigoroso
//Apenas Aspas Duplas
//Aceita comentarios