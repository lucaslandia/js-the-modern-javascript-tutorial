// || OR

if (1 || 0) console.log('truthy!')

// OR "||" finds the first truthy value

console.log()
console.log(1 || 0) // 1
console.log(null || 1) // 1
console.log(null || 0 || 1) // 1
console.log(undefined || null || 0) // 0

/// Getting the first truthy value from a list of variables or expressions

console.log()
let firstName = ""
let lastName = ""
let nickName = "SuperCoder"
console.log(firstName || lastName || nickName || "Anonymous") /// SuperCoder

/// Short-circuit evaluation

console.log()
true || console.log('not printed')
false || console.log('printed')

// && (AND)

if (1 || 0) console.log('won\'t work, because the result is falsy')

// AND "&&" finds the first falsy value

console.log()
console.log(1 && 0) // 0
console.log(1 && 5) // 5
console.log(null && 5) // null
console.log(0 && 'no matter what') // 0
console.log(1 && 2 && null && 3) // null

let x = 1
x > 0 && console.log('Greater than zero!')

// ! (NOT)

console.log()
console.log(!true) // false
console.log(!0) // true

/* Converting a value to boolean type: */
console.log()
console.log(!!'non-empty string') // true
console.log(Boolean('non-empty string')) // true
console.log(!!null) // false
console.log(Boolean(null)) // false

