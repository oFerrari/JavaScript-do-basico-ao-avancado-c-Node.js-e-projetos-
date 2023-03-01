let person = {
    legs: 2,
}

console.log(Object.getPrototypeOf(person))
console.log(Object.getPrototypeOf(person) == Object.prototype)
console.log(person.hasOwnProperty('pernas'))


let newPerson = Object.create(person)
console.log(newPerson.legs)

console.log(newPerson.hasOwnProperty('legs'))

console.log(Object.getPrototypeOf(newPerson) === person)