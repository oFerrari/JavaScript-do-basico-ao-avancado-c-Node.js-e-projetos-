let p = Promise.resolve(new Error("Não deu certo, TENTE DENOVO"));

console.log("lalala");

p.then(value => console.log(value))
 .catch(reason => console.log("Falhou: " + reason));