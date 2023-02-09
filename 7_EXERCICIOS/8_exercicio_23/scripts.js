function verificaLimite(string){
    if(string.length > 10){
        console.log("Texto muito Longo")
    }else{
        console.log("Texto dentro do limite")
    }
}

verificaLimite("Ola andrei texto grande")
verificaLimite("Ola")