// Terms: "unary", "binary", "operand"

/// Unary operator
let x = 1
x = -x
console.log(x) // -1, unary negation was applied.

/// Binary operator
let x1 = 1, y1 = 3
console.log(y1 - x1) // 2, binary minus substract values.

// Remainder %

console.log()
console.log(5 % 2) // 1
console.log(8 % 3) // 2

// Exponentiation **

console.log()
console.log(2 ** 2) // 4
console.log(2 ** 3) // 8
console.log(2 ** 4) // 16
console.log(4 ** 1/2) // 2, power of 1/2 is the same as a square root.
console.log(8 ** 1/3) // 2.66, power of 1/3 is the same as a cubic root.

// String concatenation with binary +

console.log()
let s = 'my' + 'string'
console.log(s) // mystring
console.log('1' + 2) // 12
console.log(1 + '2') // 12
console.log(2 + 2 + '1') // 41
console.log(6 - '2') // 4, converts 2 to a number.
console.log('6' / '2') // 3, converts both operands to numbers.

// Numeric conversion, unary +

console.log(+1) // 1, no effect on numbers.
console.log(-2) // -2
console.log(+true) // 1, the sae as Number(), but is shorter.
console.log(+'') // 0
console.log(+null) // 0
console.log(+undefined) // Nan
console.log(+{}) // Nan
console.log(+'123') // 123
console.log(+'123a') // Nan
const apples = '2', oranges = '3'
console.log(+apples + +oranges) // 5

// Operator precedence

/* If an expression has more than one operator, the execution order is defined by their precedence, or, in other
words, the default priority order of operators. */

// Assignment

console.log()
let x2 = 2 * 2 + 1
console.log(x2) // 5, assignment operator has a low priority.

// Assignment = returns a value

console.log()
let a = 1, b = 2
let c = 3 - (a = b + 1)
console.log(a) // 3
console.log(c) // 0

// Chaining assignments

console.log()
let a1, b1, c1
a1 = b1 = c1 = 2 + 2
console.log(a1) // 4
console.log(b1) // 4
console.log(c1) // 4

// Modify in place

console.log()
let n = 2
n *= 3 + 5
console.log(n) // 16

// Increment/decrement

console.log()
let counter = 2
counter++
console.log(counter)

let counter1 = 2
counter1--
console.log(counter1)

let counter2 = 1
let prenum = ++counter2 // The prefix form returns the new value.
console.log(counter2) // 2
console.log(prenum) // 2

let counter3 = 1
let postnum = counter3++ // The postfix form returns the old value.
console.log(counter3) // 2
console.log(postnum) // 1

let counter4 = 1
console.log(5 * counter4++) // 5

// Bitwise operators

/* Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation.

These operators are not JavaScript-specific. They are supported in most programming languages.

The list of operators:

AND ( & )
OR ( | )
XOR ( ^ )
NOT ( ~ )
LEFT SHIFT ( << )
RIGHT SHIFT ( >> )
ZERO-FILL RIGHT SHIFT ( >>> ) */

// Comma

console.log()
let commaVar = (1 + 2, 3 + 4) // Evaluates several expressions but return only the result of the last one.
console.log(commaVar)