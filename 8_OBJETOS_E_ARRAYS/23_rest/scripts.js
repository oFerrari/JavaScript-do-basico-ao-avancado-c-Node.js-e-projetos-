n1 = 1
n5 = 5
n10 = 10
n15 = 15

function imprimirNumeros(...args) {
    for (let i = 0; i < args.length; i++){
        console.log(args[i])
    }
}

imprimirNumeros(n1, n5, n10, n15)
console.log("--------------------------------")
imprimirNumeros(2,4,6,7,8,15)