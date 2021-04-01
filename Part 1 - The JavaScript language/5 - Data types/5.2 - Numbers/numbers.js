// More ways to write a number

let billion = 1000000000
console.log(billion) // 1000000000
let billion1 = 1e9
console.log(billion1) // 1000000000

console.log(7.3e9) // 7300000000

console.log(1e3 == 1 * 1000) // true
console.log(1.23e6 == 1.23 * 1000000) // true

let ms = 0.000001
console.log(ms) // 0.000001
let ms1 = 1e-6
console.log(ms1) // 0.000001

console.log(1e-3 == 1 / 1000) // true
console.log(1.23e-6 == 1.23 /1000000) // true

// Hex, binary and octal numbers

console.log()
console.log(0xff) // 255
console.log(0xFF) // 255

let binary = 0b11111111 // Binary form of 255
let octal = 0o377 // Octal form of 255
console.log(binary === octal) // true

// toString (base)

let num = 255
console.log(num.toString(16)) // ff
console.log(num.toString(2)) // 11111111
console.log(123456..toString(36)) // 2n9c
console.log((123456).toString(36)) // 2n9c

// Rounding

console.log()
console.log(Math.floor(3.1)) // 3, rounds down.
console.log(Math.ceil(3.1)) // 4, rounds up.
console.log(Math.round(3.1)) // 3, rounds to the nearest integer.
console.log(Math.trunc(3.1)) // 3, remove anything after the decimal point without rounding.

let num1 = 1.23456
console.log(Math.floor(num1 * 100) / 100) // 1.23
console.log(num1.toFixed(2)) // 1.23
let num2 = 12.36
console.log(num2.toFixed(1)) // 1.4
let num3 = 12.34
console.log(num3.toFixed(5)) // 12.34000

// Imprecise calculations

console.log()
console.log(1e500) // Infinity
console.log(.1 + .2) // 0.30000000000000004
console.log(.1.toFixed(20)) // 0.10000000000000000555

let sum = .1 + .2
console.log(+sum.toFixed(2)) // 0.3

console.log((.1 * 10 + .2 * 10) / 10) // 0.3
console.log((.28 * 100 + .14 * 100) / 100) // 0.4200000000000001

console.log(9999999999999999) // 10000000000000000

console.log(-0) // -0
console.log(0) // 0

// Tests: isFinite and IsNaN

console.log()
console.log(isNaN(NaN)) // true
console.log(isNaN(NaN)) // true
console.log(NaN === NaN) // false

console.log(isFinite('15')) // true
console.log(isFinite('str')) // false
console.log(isFinite(Infinity)) // false

let num4 = '122a'
console.log(isFinite(num4)) // false

console.log(NaN == NaN) // false
console.log(Object.is(NaN, NaN)) // true
console.log(0 == -0) // true
console.log(Object.is(0, -0)) // false

// parseInt and parseFloat

console.log()
console.log(parseInt('100px'))  // 100
console.log(parseFloat('12.5em')) // 12.5
console.log(parseInt('12.3')) // 12
console.log(parseFloat('12.3.4')) // 12.3
console.log(parseInt('a12')) // NaN

console.log(parseInt('0xff', 16)) // 255
console.log(parseInt('ff', 16)) // 255
console.log(parseInt('2n9c', 36)) // 123456

// Other math functions

console.log()
console.log(Math.random()) // Returns a random number from 0 to 1 (not including 1).
console.log(Math.max(3, 5, -10, 0, 1)) // 5
console.log(Math.min(1, 2)) // 1
console.log(Math.pow(2, 10)) // 1024