class Mamifero{
    constructor(paws, puppies){
        this.paws = paws
        this.puppies = puppies
    }

}

let animalMamifero = new Mamifero(4,2)
console.log(animalMamifero.paws)

class Cool extends Mamifero{
    constructor(paws,name){
        super(paws,paws)
        this.name = name
    }
}

let vacaMamifera = new Cool(5,"brown")
console.log(vacaMamifera.paws)
console.log(vacaMamifera.name)

