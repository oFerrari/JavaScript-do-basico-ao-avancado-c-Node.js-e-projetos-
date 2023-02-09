function imprimirPares(num) {
    for(let i = 0; i < num; i--){
        if (num % 2 == 0) {
            console.log(num)
        }
        imprimirPares(num - 1)
    }
    
}

imprimirPares(20)


/* function imprimePar(num){
    for(let i = num; i >= 0; i--){
        if(i % 2 == 0){
            console.log(i)
        }
    }
}

imprimePar(50) */