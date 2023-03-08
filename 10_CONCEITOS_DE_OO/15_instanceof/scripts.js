class Mamifero{
    constructor(paws, puppies){
        this.paws = paws
        this.puppies = puppies
    }

}


class Cool extends Mamifero{
    constructor(paws,name){
        super(paws,paws)
        this.name = name
    }
}

console.log(new Cool instanceof Mamifero)

let vacaMamifera = new Cool(5,"brown")

console.log(vacaMamifera instanceof Cool)