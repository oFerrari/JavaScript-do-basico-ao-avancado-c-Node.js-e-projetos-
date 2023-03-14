const reg = /\w+: (Matheus|João|Maria)/; // Nome: nadsuasudi

console.log(reg.test("Nome: Matheus"));
console.log(reg.test("Nome: Maria"));
console.log(reg.test("Nome: Andrei"));