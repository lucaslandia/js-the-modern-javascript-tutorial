let str = 'Hello'
console.log(str.toUpperCase()) // HELLO

let n = 1.23456
console.log(n.toFixed(2)) // 1.23

/// Constructors String/Number/Boolean are for internal use only

console.log()
console.log(typeof 0) // number
console.log(typeof new Number(0)) // object

let zero = new Number(0)
if (zero)
    console.log('zero is truthy!?!') // Zero it's true, because is an object.

let num = Number('123') // Convert a string to number.
console.log(num)

/// null/undefined have no methods

// console.log(null.test) // error
