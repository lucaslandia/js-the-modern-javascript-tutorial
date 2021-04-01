// Add/remove items

/// splice

let arr = ['I', 'go', 'home']
delete arr[1]
console.log(arr[1]) // undefined
console.log(arr) // [ 'I', <1 empty item>, 'home' ]

let arr1 = ['I', 'study', 'JavaScript']
console.log(arr1.splice(1, 1)) // study
console.log(arr1) // [ 'I', 'JavaScript' ]

let arr2 = ['I', 'study', 'JavaScript', 'right', 'now']
console.log(arr2.splice(0, 3, 'Let\'s', 'dance')) // [ 'I', 'study', 'JavaScript' ]
console.log(arr2) // [ "Let's", 'dance', 'right', 'now' ]

let arr3 = ['I', 'study', 'JavaScript']
console.log(arr3.splice(2, 0, 'complex', 'language')) // []
console.log(arr3) // [ 'I', 'study', 'complex', 'language', 'JavaScript' ]

let arr4 = [1, 2, 5]
arr4.splice(-1, 0, 3, 4)
console.log(arr4) // [ 1, 2, 3, 4, 5 ]

/// slice

console.log()
let arr5 = ['t', 'e', 's', 't']
console.log(arr5.slice(1, 3)) // es
console.log(arr5.slice(-2)) // st

/// concat

console.log()
let arr6 = [1, 2]

console.log(arr6.concat([3, 4])) // [ 1, 2, 3, 4 ]
console.log(arr6.concat([3, 4], [5, 6])) // [ 1, 2, 3, 4, 5, 6 ]
console.log(arr6.concat([3, 4], 5, 6)) // [ 1, 2, 3, 4, 5, 6 ]

let arrayLike = {
    0: 'something',
    length: 1
}
console.log(arr6.concat(arrayLike)) // [ 1, 2, { '0': 'something', length: 1 } ]

let arrayLike1 = {
    0: 'something',
    1: 'else',
    [Symbol.isConcatSpreadable]: true,
    length: 2
}
console.log(arr6.concat(arrayLike1)) // [ 1, 2, 'something', 'else' ]

// Iterate: forEach

console.log()
    ;['Bilbo', 'Gandalf', 'Nazgul'].forEach(console.log)

console.log()
    ;['Bilbo', 'Gandalf', 'Nazgul'].forEach((item, index, array) => {
        console.log(`${item} is at index ${index} in ${array}`)
    })

// Searching in array

/// indexOf/lastIndexOf and includes

console.log()
let arr7 = [1, 0, false]
console.log(arr7.indexOf(0)) // 1
console.log(arr7.indexOf(false)) // 2
console.log(arr7.indexOf(null)) // -1

const arr8 = [NaN]
console.log(arr8.indexOf(NaN)) // -1 (should be 0, but === equality doesn't work for NaN)
console.log(arr8.includes(NaN)) // true

/// find and findIndex

console.log()
let users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Pete' },
    { id: 3, name: 'Mary' },
]

let user = users.find(item => item.id == 1)
console.log(user.name) // John

console.log(users.findIndex(item => item.id == 1)) // 0

/// filter

console.log()
let users1 = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Pete' },
    { id: 3, name: 'Mary' },
]

let someUsers = users1.filter(item => item.id < 3)
console.log(someUsers) // [ { id: 1, name: 'John' }, { id: 2, name: 'Pete' } ]

// Transform an array

/// map

console.log()
let lengths = ['Bilbo', 'Gandalf', 'Nazgul'].map(item => item.length)
console.log(lengths) // [ 5, 7, 6 ]

/// sort(fn)

console.log()
let arr9 = [1, 2, 15]
arr9.sort()
console.log(arr9) // [ 1, 15, 2 ]

function compareNumeric(a, b) {
    if (a > b)
        return 1
    if (a == b)
        return 0
    if (a < b)
        return -1
}
arr9.sort(compareNumeric)
console.log(arr9) // [ 1, 2, 15 ]

console.log()
    ;[1, -2, 15, 2, 0, 8].sort(function (a, b) {
        console.log(a + ' <> ' + b)
    })

console.log()
let arr10 = [1, 2, 15]
arr10.sort((a, b) => a - b)
console.log(arr10) // [ 1, 2, 15 ]

console.log()
let countries = ['Österreich', 'Andorra', 'Vietnam']
console.log(countries.sort((a, b) => a > b ? 1 : -1)) // [ 'Andorra', 'Vietnam', 'Österreich' ]
console.log(countries.sort((a, b) => a.localeCompare(b))) // [ 'Andorra', 'Österreich', 'Vietnam' ]

/// reverse

console.log()
let arr11 = [1, 2, 3, 4, 5]
console.log(arr11.reverse()) // [ 5, 4, 3, 2, 1 ]
console.log(arr11) // [ 5, 4, 3, 2, 1 ]

/// split and join

console.log()
let names = 'Bilbo, Gandalf, Nazgul'
let arr12 = names.split(', ')
for (const name of arr12)
    console.log(`A message to ${name}`) // A message to Bilbo, A message to Gandalf, A message to Nazgul

let arr13 = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2)
console.log(arr13) // [ 'Bilbo', 'Gandalf' ]

let str = 'test'
console.log(str.split('')) // [ 't', 'e', 's', 't' ]

let arr14 = ['Bilbo', 'Gandalf', 'Nazgul']
let strJoin = arr14.join(';')
console.log(strJoin) // Bilbo;Gandalf;Nazgul

/// reduce/reduceRight

console.log()
let arr15 = [1, 2, 3, 4, 5]

let result = arr15.reduce((sum, current) => sum + current, 0)
console.log(result) // 15

/* If the array is empty, then reduce call without initial value gives an error. */
let result1 = arr15.reduce((sum, current) => sum + current)
console.log(result1) // 15

let result2 = arr15.reduceRight((sum, current) => sum + current)
console.log(result2) // 15

// Array.isArray

console.log()
console.log(typeof {}) // object
console.log(typeof []) // object
console.log(Array.isArray({})) // false
console.log(Array.isArray([])) // true

// Most methods support "thisArg"

console.log()
let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
        return user.age >= this.minAge && user.age < this.maxAge
    }
}

let users2 = [
    { age: 16 },
    { age: 20 },
    { age: 23 },
    { age: 30 },
]

let soldiers = users2.filter(army.canJoin, army)

console.log(soldiers.length) // 2
console.log(soldiers[0].age) // 20
console.log(soldiers[1].age) // 23

let soldiers1 = users2.filter(user => army.canJoin(user))

console.log(soldiers1.length) // 2
console.log(soldiers1[0].age) // 20
console.log(soldiers1[1].age) // 23