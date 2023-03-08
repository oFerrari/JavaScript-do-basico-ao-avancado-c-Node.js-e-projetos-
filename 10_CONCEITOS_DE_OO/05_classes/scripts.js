let dog = {
    paws : 4,
    race: 'Pitbull',
    bark : () => {console.log("au au au au")}
}

let labrador = Object.create(dog)

labrador.bark()

labrador.race = "Labrador"

console.log(labrador.race)
console.log(dog.race)

let pastorAlemao = Object.create(dog)

pastorAlemao.bark = function rosnar(){console.log("grrrrrrrr")}

pastorAlemao.bark()
pastorAlemao.race = "Pastor Alemao"

console.log(pastorAlemao.race)
