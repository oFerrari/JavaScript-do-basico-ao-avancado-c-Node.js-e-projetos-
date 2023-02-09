  function soma(n1, n2) {
    if (n1 == undefined || n2 == undefined) {
      console.log("Essa Funcao precisa ter os dois argumentos")
    } else {
      return n1 + n2
    }
  }

  console.log(soma(1, 7))
  soma(1)

  function comprimentar(nome,idade){
      if(idade == undefined){
        console.log("Ola ", nome)
      }else{
        console.log("Ola ",nome," voce tem ",idade," anos?")
      }
  }

  comprimentar("ANDREI");
  comprimentar("ANDREI",20);
