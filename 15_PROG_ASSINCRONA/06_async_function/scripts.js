async function somar(a, b) {
  return a + b;
}

console.log(somar(2,-1));

somar(2,-1).then(value => console.log(value));