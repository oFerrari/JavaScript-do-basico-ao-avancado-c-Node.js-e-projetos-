const validandoEmail = /\S+@+gmail|email|outlook+.com|.com.br/

console.log(validandoEmail.test("atheus@gmail.com"));
console.log(validandoEmail.test("matheus@gmail"));
console.log(validandoEmail.test("gmail.com"));
console.log(validandoEmail.test("matheus@gmail.com.br"));
console.log(validandoEmail.test("gmail@gmail.gmail.gmail"));