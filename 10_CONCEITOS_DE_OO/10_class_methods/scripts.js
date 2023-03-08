class Cats{
    constructor(race,/* pwas ,*/color){
    this.race = race;
    this.color = color;
    this.meow = function miar(){ return "miauuuu"}
    }
}

Cats.prototype.paws = 4

let Tom = new Cats("Tom","Black")

console.log(Tom.paws)
console.log(Tom)

