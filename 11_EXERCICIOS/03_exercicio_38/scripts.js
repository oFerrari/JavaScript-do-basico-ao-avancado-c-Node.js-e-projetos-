class Endereco{
    constructor(rua,bairro,cidade,estado){
        this.rua = rua
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado
    }

    set atualizaRua(rua){
        this.rua = rua
    }

    set atualizaBairro(bairro){
        this.bairro = bairro
    }

    set atualizaCidade(cidade){
        this.cidade = cidade
    }

    set atualizaEstado(estado){
        this.estado = estado
    }

}

let endereco1 = new Endereco("carvao","morro II","teresina","piaui")

console.log(endereco1)

endereco1.atualizaRua = "das flores"
endereco1.atualizaBairro = ("morro IV")

console.log(endereco1)