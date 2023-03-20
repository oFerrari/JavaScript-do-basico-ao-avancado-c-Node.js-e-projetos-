//Criação da Promessa

const myPromise = new Promise((resolve,regect) => {
    const nome = "Andrei"
    
    if(nome === "Andrei"){
        resolve(`O ${nome} foi encontrado!!`)
    }else{
        regect(`O ${nome} nao foi encontrado`)
    }
})

myPromise.then((dados) => {console.log(dados + "E agora estou feliz")})

//Encadeamento do then


const myPromise2 = new Promise((resolve,regect) => {
    const nome = "Andrei"
    
    if(nome === "Andrei"){
        resolve(`O ${nome} foi encontrado!!`)
    }else{
        regect(`O ${nome} nao foi encontrado`)
    }
})

myPromise2.then((dados) => {
    return dados.toUpperCase()
}).then(function stringModified(stringModificada) {
    console.log(stringModificada)
})



let promessa = Promise.resolve(5+5)

console.log("Outros códigos");

console.log(promessa);

promessa.then((value) => { return value + 5})
 .then((value) => {console.log(value)});

 