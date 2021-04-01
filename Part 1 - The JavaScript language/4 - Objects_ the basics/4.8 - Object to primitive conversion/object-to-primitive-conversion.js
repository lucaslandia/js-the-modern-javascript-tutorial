// ToPrimitive

const obj = {
    key1: 'value 1',
    key2: 'value 2'
}

/// string

console.log(obj) // { key1: 'value 1', key2: 'value 2' }
const anotherObj = {}
anotherObj[obj] = 123
console.log(anotherObj) // { '[object Object]': 123 }

/// number

let num = Number(obj)
console.log(num) // NaN

let n = +obj
console.log(n) // NaN
let date1 = new Date(2020, 2, 1)
let date2 = new Date(2020, 1, 1)
let delta = date1 - date2
console.log(delta) // 12697480902

let greater = obj > anotherObj
console.log(greater) // false

/// default

let total = obj + anotherObj
console.log(total)

if (obj != 1)
    console.log('It\'s not equal')

// Symbol.toPrimitive

console.log()
let user = {
    name: 'John',
    money: 1000,
    [Symbol.toPrimitive](hint) {
        console.log(`hint: ${hint}`)
        return hint == 'string' ? `name: ${this.name}` : this.money
    }
}

console.log(user) // { name: 'John', money: 1000, [Symbol(Symbol.toPrimitive)]: [Function: [Symbol.toPrimitive]] }
console.log(+user) // 1000
console.log(user + 500) // 1500

// toString/valueOf

console.log()
let user1 = { name: 'John' }
console.log(`${user1}`) // [object Object]
console.log(user1.toString()) // [object Object]
console.log(user1.valueOf()) // { name: 'John' }
console.log(user1.valueOf() === user1) // true

console.log()
let user2 = {
    name: 'John',
    money: 1000,    
    toString() { return `name: ${this.name}` }, // for hint='string'
    valueOf() { return this.money } // for hint='number' or 'default'
}
console.log(`${user2}`) // name: John
console.log(+user2) // 1000
console.log(user2 + 500) // 1500

console.log()
let user3 = {
    name: 'John',
    toString() { return this.name }
}
console.log(`${user3}`) // John
console.log(user3 + 500) // John500

// Return types

/* The important thing to know about all primitive-conversion methods is that they do not necessarily return the “hinted” primitive.

There is no control whether toString returns exactly a string, or whether Symbol.toPrimitive method returns a number for a hint "number".

The only mandatory thing: these methods must return a primitive, not an object. */

// Further conversions

console.log()
let obj1 = {
    toString() { return '2' }
}
console.log(obj1 * 2) // 4
console.log(obj1 + 2) // 22

console.log(true == obj)