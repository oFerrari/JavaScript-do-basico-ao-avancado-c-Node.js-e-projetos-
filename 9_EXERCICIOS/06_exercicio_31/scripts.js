let array1 = [2, true, false, "andrei",]
let array2 = ["primeiro",null, 2, true, false, "andrei",]

function verificaArray(array){
    if(array.length < 5){
        console.log("Poucos Elementos")
    }else{
        console.log("Muitos Elementos")
    }
}

verificaArray(array1)
verificaArray(array2)