// Declaration

let arr = new Array()
let arr1 = []
let fruits = ['Apple', 'Orange', 'Plum']

console.log(fruits[0]) // Apple
console.log(fruits[1]) // Orange
console.log(fruits[2]) // Plum

fruits[2] = 'Pear'
console.log(fruits) // [ 'Apple', 'Orange', 'Pear' ]

fruits[3] = 'Lemon'
console.log(fruits) // [ 'Apple', 'Orange', 'Pear', 'Lemon' ]

console.log(fruits.length) // 4

let arr2 = ['Apple', { name: 'John' }, true, function () { console.log('hello') }]
console.log(arr2[1].name) // John
arr2[3]() // hello

// Methods pop/push, shift/unshift

/// Methods that work with the end of the array

console.log()
let fruits1 = ['Apple', 'Orange', 'Pear']

console.log(fruits1.pop()) // Pear
console.log(fruits1) // [ 'Apple', 'Orange' ]

console.log(fruits1.push('Banana')) // 3
console.log(fruits1) // [ 'Apple', 'Orange', 'Banana' ]
console.log(fruits1[fruits1.length] = 'Apricot') // Apricot
console.log(fruits1) // [ 'Apple', 'Orange', 'Banana', 'Apricot' ]

/// Methods that work with the beginning of the array

console.log()
let fruits2 = ['Apple', 'Orange', 'Pear']

console.log(fruits2.shift()) // Apple
console.log(fruits2) // [ 'Orange', 'Pear' ]

console.log(fruits2.unshift('Avocado')) // 3
console.log(fruits2) // [ 'Avocado', 'Orange', 'Pear' ]

/// Methods push and unshift can add multiple elements at once

console.log()
let fruits3 = ['Apple']
fruits3.push('Orange', 'Peach')
fruits3.unshift('Pineapple', 'Lemon')
console.log(fruits3) // [ 'Pineapple', 'Lemon', 'Apple', 'Orange', 'Peach' ]

// Internals

console.log()
let fruits4 = ['Banana']
let arr3 = fruits4
console.log(fruits4 == arr3) // true
arr3.push('Pear')
console.log(fruits4) // [ 'Banana', 'Pear' ]

/* Breaking JavaScript engine array optimization */
let fruits5 = []
fruits5[9999] = 5
fruits5.age = 25
console.log(fruits5) // [ <9999 empty items>, 5, age: 25 ]

// Performance

/* Methods push/pop run fast, while shift/unshift are slow. */

// Loops

let arr4 = ['Apple', 'Orange', 'Pear']

console.log()
for (let i = 0; i < arr4.length; i++) {
    console.log(arr4[i])
}

console.log()
for (let fruit of arr4) {
    console.log(fruit)
}

/* Shouldn't use */
console.log()
for (let key in arr4) {
    console.log(arr4[key])
}

// A word about "length"

console.log()
let fruits6 = []
fruits6[123] = 'Apple'
console.log(fruits6.length) // 124

let arr5 = [1, 2, 3, 4, 5]
arr5.length = 2
console.log(arr5) // [ 1, 2 ]
arr5.length = 5
console.log(arr5[3]) // undefined
console.log(arr5) // [ 1, 2, <3 empty items> ]
arr5.length = 0 // Clears the array

// new Array

console.log()
let arr6 = new Array('Apple', 'Pear', 'etc')
console.log(arr6)

let arr7 = new Array(2)
console.log(arr7[0]) // undefined
console.log(arr7.length) // 2

// Multidimensional arrays

console.log()
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.log(matrix[1][1]) // 5

// toString

console.log()
let arr8 = [1, 2, 3]
console.log(arr8.toString()) // 1,2,3
console.log(String(arr8) == '1,2,3') // true

console.log([] + 1) // 1
console.log([1] + 1) // 11
console.log([1, 2] + 1) // 1,21