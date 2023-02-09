function recursion(x) {
  if (x - 1 < 2) {
    console.log("RECURSION PAROU")
   
  } else if (x % 2 != 0) {
    console.log("É IMPAR ", x)
    recursion(x - 1)
  } else {
    console.log("É PAR ", x)
    recursion(x - 2)
  }
}

recursion(39)
recursion(10)
recursion(25)