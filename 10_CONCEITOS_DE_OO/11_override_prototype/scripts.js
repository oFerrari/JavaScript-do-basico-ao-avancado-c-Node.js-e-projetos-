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



