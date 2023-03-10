function verificaNumber(num){
    let number = Number(num);
    if(Number.isNaN(number)){
        alert("Recebendo só numeros!")
    }else{
       alert(num)
    }
}

let num = prompt("Digite um valor")

verificaNumber(num)

verificaNumber(num)