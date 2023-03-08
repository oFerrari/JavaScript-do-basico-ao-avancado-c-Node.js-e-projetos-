//Instanciando classes através do New

function Dogs(race,paws,color){
    this.race = race;
    this.paws = paws;
    this.color = color;

    this.growl = function rosnar(){console.log("grrrrrrrrrr")}
}

let dog1 = new Dogs("Hotwailler",4,"black")
console.log(dog1)
dog1.growl()