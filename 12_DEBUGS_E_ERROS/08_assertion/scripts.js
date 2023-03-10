let arr  = [1,2,3,4,5];
let arr2 = [];

function iterarArray(parametro) {
  if(parametro.length == 0) {
    throw new Error("O array esta vazio, preencha ele agora !");
  } else {
    for(let i = 0; i < parametro.length; i++) {
      console.log(i);
    }
  }
}

function arrayVazio(arr) {
  if(arr.length > 0) {
    throw Error("O array não pode ter elementos");
  } else {
    console.log("Agora deu certo");
  }
}

iterarArray(arr);
arrayVazio(arr2)
arrayVazio(arr);
iterarArray(arr2);