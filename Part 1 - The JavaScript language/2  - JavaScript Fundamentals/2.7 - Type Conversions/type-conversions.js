// String Conversion

let value = true
console.log(typeof value)
value = String(value)
console.log(typeof value)

// Numeric Conversion

console.log()
console.log('6' / '2') // Strings are converted to a number.

let str = '123'
console.log(typeof str)
let num = Number(str)
console.log(typeof num)

let age = Number('an arbitrary string instead of a number')
console.log(age) // Nan, conversion failed.

console.log()
console.log(Number('   123   ')) // 123
console.log(Number('123z')) // Nan
console.log(Number(true)) // 1
console.log(Number(false)) // 0
console.log(Number(null)) // 0
console.log(Number(undefined)) // Nan

// Boolean conversion

console.log()
console.log(Boolean(1)) // true
console.log(Boolean(0)) // false
console.log(Boolean('hello')) //true
console.log(Boolean('')) // false
console.log(Boolean(null)) // false
console.log(Boolean(undefined)) // false
console.log(Boolean(false)) // false
console.log(Boolean('0')) // true
console.log(Boolean(' ')) // true