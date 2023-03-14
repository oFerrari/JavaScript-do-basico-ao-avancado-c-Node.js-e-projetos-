const dia = /\d\d/;

console.log(dia.test("2019") && "2019".length == 2);
console.log(dia.test("asd"));
console.log(dia.test("05") && "05".length == 2);
console.log(dia.test("asd1"));

const palavrasPeloMenosTresLetras = /\w\w\w/;

console.log(palavrasPeloMenosTresLetras.test("asd") && "asd".length == 3);
console.log(palavrasPeloMenosTresLetras.test("asdd") && "asdd".length == 3);
console.log(palavrasPeloMenosTresLetras.test("as") && "as".length == 3);