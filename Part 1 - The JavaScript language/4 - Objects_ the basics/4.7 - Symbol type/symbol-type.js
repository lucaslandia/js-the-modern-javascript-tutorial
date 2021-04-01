// Symbols

let id1 = Symbol('id')
let id2 = Symbol('id')
console.log(id1 == id2) // false

let id = Symbol('id')
console.log(id.toString())
console.log(id.description)

// "Hidden" properties

console.log()
let user = {
    name: 'John'
}
let id3 = Symbol('id')
user[id3] = 1
console.log(user[id3])

// Symbols in a literal

console.log()
let id4 = Symbol('id')
let user1 = {
    name: 'John',
    [id4]: 123
}
console.log(user1) // { name: 'John', [Symbol(id)]: 123 }

// Symbols are skippedby for..in

console.log()
let id5 = Symbol('id')
let user2 = {
    name: 'John',
    age: 30,
    [id5]: 123
}
for (let key in user2) 
    console.log(key) // name, age
console.log(user2[id5]) // 123

let id6 = Symbol('id')
let user3 = {
    [id6]: 123
}
let clone = Object.assign({}, user3)
console.log(clone[id6])

// Global symbols

console.log()
let id7 = Symbol.for('id') // If the symbol did not exist, it is created.
let idAgain = Symbol.for('id')
console.log(id7 === idAgain) // true

// Symbol.keyFor

console.log()
let sym = Symbol.for('name')
let sym2 = Symbol.for('id')
console.log(Symbol.keyFor(sym)) // name
console.log(Symbol.keyFor(sym2)) // id

let globalSymbol = Symbol.for('name')
let localSymbol = Symbol('name')
console.log(Symbol.keyFor(globalSymbol)) // name
console.log(Symbol.keyFor(localSymbol)) // undefined
console.log(localSymbol.description) // name

// System symbols

/* There exist many “system” symbols that JavaScript uses internally, and we can use them to fine-tune various aspects of our objects.

They are listed in the specification in the Well-known symbols table:

Symbol.hasInstance
Symbol.isConcatSpreadable
Symbol.iterator
Symbol.toPrimitive
…and so on. */