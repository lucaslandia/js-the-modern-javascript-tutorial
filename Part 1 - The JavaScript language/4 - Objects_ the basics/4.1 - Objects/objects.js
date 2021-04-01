let user = new Object() // "object constructor" syntax
let user1 = {} // "object literal" syntax
console.log(user)
console.log(user1)

// Literals and properties

console.log()
let user2 = {
    name: "John",
    age: 30
}
console.log(user2.name) // John
console.log(user2.age) // 30

user2.isAdmin = true
delete user2.age
console.log(user2) // { name: 'John', isAdmin: true }

let user3 = {
    name: "John",
    age: 30,
    "likes birds": true
}
console.log(user3) // { name: 'John', age: 30, 'likes birds': true }

let user4 = {
    name: "John",
    age: 30, // Trailing comma.
}
console.log(user4)

const user5 = {
    name: "John"
}
user.name = "Pete"
console.log(user.name)

// Square brackets

console.log()
let user6 = {}
user['likes birds'] = true
console.log(user['likes birds'])
delete user['likes birds']

let user7 = {}
let key = 'likes birds'
user7[key] = true
console.log(user7)

// Computed properties

console.log()
let fruit = 'apple'
let bag = {
    [fruit]: 5
}
console.log(bag.apple) // 5

let fruit1 = 'apple'
let bag1 = {
    [fruit + 'Computers']: 6
}
console.log(bag1.appleComputers) // 6

// Property value shorthand

console.log()
let name = 'Joe'
let user8 = {
    name,
    age: 30
}
console.log(user8)

// Property names limitations

console.log()
let obj = {
    for: 1,
    let: 2,
    return: 3
}
console.log(obj.for + obj.let + obj.return) // 6

let obj1 = {
    0: 'test' // Automatically converted to string.
}
console.log(obj1['0']) // test
console.log(obj1[0]) // test

let obj2 = {}
obj2.__proto__ = 5
console.log(obj2.__proto__) // undefined, __proto__ has a special nature.

// Property existence test, "in" operator

console.log()
let user9 = {
    age: 33
}
console.log(user9.noSuchProperty === undefined) // true
console.log('noSuchProperty' in user9) // false
console.log('age' in user9) // true
let key1 = 'age'
console.log(key1 in user9) // true

let obj3 = {
    test: undefined
}
console.log(obj.test) // undefined
console.log('test' in obj3) // true

// The "for...in" loop

console.log()
let user10 = {
    name: 'John',
    age: '30',
    isAdmin: true,
}
for (let key in user10) {
    console.log(key) // name, age, isAdmin
    console.log(user10[key]) // John, 30, true
}

// Ordered like an object

console.log()
let codes = {
    '49': 'Germany',     
    '41': 'Switzerland',
    '44': 'Great Britain',
    '1': 'USA',
}
for (let code in codes) {
    console.log(code) // 1, 41, 44, 49
}

let user11 = {
    name: 'John',
    surname: 'Smith'    
}
user11.age = 25
for (let prop in user11) {
    console.log(prop) // name, surname, age
}

let codes1 = {
    '+49': 'Germany',     
    '+41': 'Switzerland',
    '+44': 'Great Britain',
    '+1': 'USA',
}
for (let code in codes1) {
    console.log(+code) // 49, 41, 44, 1
}