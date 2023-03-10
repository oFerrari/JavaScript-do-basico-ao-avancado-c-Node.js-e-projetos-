function cumprimentar(nome){
    if(typeof nome != 'string'){
        throw new Error("O parametro precisa ser uma String")
    }else{
        console.log(`Ola ${nome}`)
    }
}

cumprimentar("Andrei")
cumprimentar(34)