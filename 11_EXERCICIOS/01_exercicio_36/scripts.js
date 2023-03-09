class contaBanco{
  constructor(saldo = 0){
    this.saldo = saldo
  }

  set setDeposito(dep){
    this.saldo += + dep
  }
  set setSaque(saq){
    this.saldo -= saq
  }

  get getSaldo(){
    return this.saldo
  }

}

let pessoa1 = new contaBanco(1000);

pessoa1.setDeposito = 500
pessoa1.setDeposito = 500

pessoa1.setSaque = 200

console.log(pessoa1.getSaldo)