// Rest parameters

function sumAll(...args) {
    let sum = 0

    for (let arg of args)
        sum += arg

    return sum
}

console.log(sumAll(1, 2, 3, 4, 5)) // 15

function showName(firstName, lastName, ...titles) {
    console.log(`${firstName} ${lastName}`)
    console.log(titles[0])
    console.log(titles[1])
}

showName('Julius', 'Caesar', 'Consul', 'Imperator')

// The 'arguments' variable

console.log()

function showName() {
    console.log(arguments.length)
    console.log(arguments[0])
    console.log(arguments[1])
}

showName('Julius', 'Caesar') // 2, Julius, Caesar
showName('Ilya') // 1, Illya, undefined

// Spread syntax

console.log()
const arr = [3, 5, 1]
console.log(Math.max(...arr)) // 5

const arr1 = [1, -2, 3, 4]
const arr2 = [8, 3, -8, 1]
console.log(Math.max(...arr1, ...arr2)) // 8
console.log(Math.max(1, ...arr1, 2, ...arr2, 25)) // 25

const arr3 = [3, 5, 1]
const arr4 = [8, 9, 15]
const merged = [0, ...arr3, 2, ...arr4]
console.log(merged) // [ 0, 3, 5, 1, 2, 8, 9, 15 ]

let str = 'Hello'
console.log([...str]) // [ 'H', 'e', 'l', 'l', 'o' ]
console.log(Array.from(str)) // [ 'H', 'e', 'l', 'l', 'o' ]

// Get a new copy of an array/object

console.log()
const arr5 = [1, 2, 3]
const arr5Copy = [...arr5]
console.log(JSON.stringify(arr5) === JSON.stringify(arr5Copy)) // true
console.log(arr5 === arr5Copy) // false

const obj = { a: 1, b: 2, c: 3 }
const objCopy = { ...obj }
console.log(JSON.stringify(obj) === JSON.stringify(objCopy)) // true
console.log(obj === objCopy) // false