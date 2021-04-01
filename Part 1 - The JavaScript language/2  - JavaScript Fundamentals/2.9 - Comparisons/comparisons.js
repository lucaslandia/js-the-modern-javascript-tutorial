// Boolean is the result

let result = 5 > 4
console.log(result) // true

// String comparison

console.log()
console.log('Z' > 'A') // true
console.log('Glow' > 'Glee') // true
console.log('Bee' > 'Be') // true
console.log('A' > 'a') // false

// Comparison of different types

/* When comparing values of different types, JavaScript converts the values to numbers. */

console.log()
console.log('2' > 1) // true, string '2' becomes a number 2.
console.log('01' == 1) // true
console.log(true == 1) // true, true becomes a numbe 1.
console.log(false == 0) // true

console.log()
let a = 0
console.log(Boolean(a)) // false
let b = '0'
console.log(Boolean(b)) // true
console.log(a == b) // true!

console.log(0 == false) // true
console.log('' == false) // true
console.log(0 === false) // false, because the types are different.

// Comparison with null and undefined

console.log()
console.log(null === undefined) // false
console.log(null == undefined) // true

/// Strange result: null vs 0

/* For maths and other comparisons (< > <= >=) null/undefined are converted to 
numbers: null becomes 0, while undefined becomes NaN. */

console.log()
console.log(null > 0) // false
console.log(null == 0) // true
console.log(null >= 0) // true

/// An incomparable undefined

console.log()
console.log(undefined > 0) // false
console.log(undefined < 0) // false
console.log(undefined == 0) // false
console.log(NaN == NaN) // false
console.log(undefined == NaN) // false