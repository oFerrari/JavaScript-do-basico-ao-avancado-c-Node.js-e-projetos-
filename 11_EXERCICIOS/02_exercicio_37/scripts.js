class CarrinhoCompras {
  constructor(item, quantidadeTotal, valorTotal) {
      this.item = item
      this.quantidadeTotal = quantidadeTotal
      this.valorTotal = valorTotal
    }

    set setAdicionarItens(itens) {
      for(let adicionar in this.item){
        console.log(adicionar)
      }
      this.item.push(itens)
    }

    set setRemoverItem(item) {
      if(item == this.item){
        delete this.item;
      }
    }
}


let compra1 = new CarrinhoCompras([{id:1, nome:"gilette",quantidade:5,preco:10},{id:1, nome:"sabonete",quantidade:2,preco:5}], 7, 60)

compra1.setAdicionarItens = {id:3, nome:"blusa",quantidade:2,preco:20}

/* console.log(compra1) */


