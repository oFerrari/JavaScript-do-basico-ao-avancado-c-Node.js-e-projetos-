const gato = {
    miar : () => {console.log("miauuu")},
    arranhar : () => {console.log("rhaumm")},
    raca : "Indefinida",
    setRaca: function (raca){
        this.raca = raca
//ou    gato.raca = raca
    },
    getRaca : function (){
        return ("A raca do animal é: " + this.raca)
    }
  }
  
gato.setRaca("Persa")
console.log(gato.getRaca())