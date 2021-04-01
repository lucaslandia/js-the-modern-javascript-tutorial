// No error. JavaScript is a dynamically typed language.
let message = 'hello'
message = 123456
console.log(message)

// Number 

console.log()
let n = 123
n = 12.345
console.log(n)

console.log(1 / 0) // Infinity
console.log(Infinity) // Infinity
console.log(-Infinity) // -Infinity
console.log('not a number' / 2) // NaN
console.log('not a number' / 2 + 5) // NaN

// BigInt

console.log()
const bigInt = 9007199254740993n
console.log(bigInt)

// String

console.log()
let str = "Hello"
let str1 = 'Single quotes are ok too'
let phrase = `can embed another ${str}`
console.log(str)
console.log(str1)
console.log(phrase)

console.log()
let name = 'John'
console.log(`Hello, ${name}!`) // Embed a variable
console.log(`The result is ${1 + 2}`) // Embed a expression

// Boolean

console.log()
let nameFieldChecked = true
let ageFieldChecked = false
console.log(nameFieldChecked)
console.log(ageFieldChecked)
let isGreater = 4 > 1 // Boolean values also comes as results of comparisions
console.log(isGreater)

// The "null" value

console.log()
let age = null
console.log(age) // null

// The "undefined" value

console.log()
let age1
console.log(age1) // undefined

let age2 = 100
age2 = undefined
console.log(age2) // undefined

// Objects and Symbols

/* All other types are called “primitive” because their values can contain only a single thing (be it a string or a 
number or whatever). In contrast, objects are used to store collections of data and more complex entities.
The symbol type is used to create unique identifiers for objects. */

// The typeof operator

console.log()
console.log(typeof undefined) // "undefined"
console.log(typeof 0) // "number"
console.log(typeof 10n) // "bigint"
console.log(typeof true) // "boolean"
console.log(typeof "foo") // "string"
console.log(typeof Symbol("id")) // "symbol"
console.log(typeof Math) // "object"
console.log(typeof null) // "object" -> JavaScript early days error.
console.log(typeof console.log) // "function" -> Functions really belong to objects type, there is no "function" type.
