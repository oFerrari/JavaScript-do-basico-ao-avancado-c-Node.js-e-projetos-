const reg1 = new RegExp('arma');

console.log(reg1.test("Tem arma?"));
console.log(reg1.test("Não tem arma"));
console.log(("--------------"));

const reg2 = /bola/;

let text = 'Tem bola na cesta';

console.log(reg2.test("Tem bola?"));
console.log(reg2.test("Não tem bol"));
console.log(reg2.test(text));
console.log(("--------------"));

console.log(/quadrado/.test("Onde tem um quadrado"));
console.log(/quadrado/.test("3423442323434quadrado2342323424332"));