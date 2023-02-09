function multiplicarValores(a,b,c){
    return a*b*c
}

console.log(multiplicarValores(2,3,1))

let multiplicacao = multiplicarValores(2,5,1);

console.log("O resultado da multiplicação foi: " , multiplicacao)

function podeDirigir(idade,cnh){
    if(idade >= 18 && cnh == true){
        console.log("Pode dirigir")
    }else{
        console.log("Não pode dirigir")
    }
}

podeDirigir(19,true)
podeDirigir(29,false)
podeDirigir(40,0)