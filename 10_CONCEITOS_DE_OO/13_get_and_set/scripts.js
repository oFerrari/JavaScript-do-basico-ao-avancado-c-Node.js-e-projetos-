class Dog{
    constructor(race,color){
    this.race = race;
    this.color = color;
}
    bark(){ return "auauu"}

    get getColor(){
        return this.color
    }

    set setColor(color){
        this.color = color
    }
}

let pastor = new Dog("alemao","undefined")

console.log(pastor)

pastor.setColor = "Brown"

console.log(pastor)

console.log(pastor.getColor)