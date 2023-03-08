class Dog{
    constructor(race,/* paws ,*/color){
    this.race = race;
    this.color = color;
}
    bark(){ return "auauu"}
}

Dog.prototype.race = "SRD"
Dog.prototype.color = "BROWN"

let fred = new Dog('poodle','black')

console.log(fred.race)
console.log(fred.bark())

console.log(Dog.prototype.race)


class Cats {
    constructor(){
    this.race = race;
    this.paws = paws;
    this.color = color;
    this.bark() = () =>{ return "auauu"}
    }
}

let Tom = new Cats()
console.log(Cats.prototype.race)

