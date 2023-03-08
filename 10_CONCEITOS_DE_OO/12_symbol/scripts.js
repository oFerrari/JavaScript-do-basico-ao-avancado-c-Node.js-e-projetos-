class Dog{
    constructor(race,color){
    this.race = race;
    this.color = color;
}
    bark(){ return "auauu"}
}

Dog.prototype.race = "SRD"
Dog.prototype.color = "BROWN"

let paws = Symbol();

Dog.prototype[paws] = 4



let fred = new Dog('poodle','black')

console.log(fred.race)
console.log(fred.bark())

console.log(Dog.prototype.race)

console.log(Dog.prototype[paws])
console.log(fred[paws])
