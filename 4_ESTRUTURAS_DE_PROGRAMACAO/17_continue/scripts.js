for (let i = 10; i > 0; i = i - 1) {

  if (i % 2 == 0) {
    console.log("Caiu no continue");
    continue;
  }

  console.log(i);
}

for (let x = 0; x < 10; x++) {
  if (x % 2 != 0) {
    continue;
  }
  console.log(x);
}