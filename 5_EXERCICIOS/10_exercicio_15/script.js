num = 1
cont = 0

for(let i = 1; i <= num; i++) {
    if(num % i == 0){
        cont++
    }
}


if(cont == 2){
    console.log(`O "${num}" É primo`)
}else{
    console.log(`O "${num}" Não é primo`)
}