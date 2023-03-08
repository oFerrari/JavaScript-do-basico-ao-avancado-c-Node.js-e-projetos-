//Instanciando classes através de Functions

function createDogs(race,paws,color){
    let dog = Object.create({})
    dog.race = race
    dog.paws = paws
    dog.color = color
    dog.bark = () => {console.log("au au au")}
    return dog
}

let lilica = createDogs("mongrel",4,"brown")

console.log(lilica.race)
lilica.bark()