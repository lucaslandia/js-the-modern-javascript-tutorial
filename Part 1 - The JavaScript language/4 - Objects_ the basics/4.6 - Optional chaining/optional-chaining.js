// The problem

let user = {}
console.log(user && user.address && user.address.street) // undefined (no error)

// Optional chaining

/* The optional chaining ?. stops the evaluation and returns undefined if the part before ?. is 
undefined or null. */

console.log()
let user1 = {}
console.log(user1?.address?.street) // undefined (no error)

let user2 = null
console.log(user2?.address.street) // undefined (no error)

// Short-cicuiting

console.log()
let user3 = null
let x = 0
user3?.sayHi(x++)
console.log(x) // 0, value not incremented.

// Other cases

/* The optional chaining ?. is not an operator, but a special syntax construct, that also works with
functions and square brackets. */

let user4 = {
    admin() { console.log('I am admin') }
}
let user5 = {}
user4.admin?.() // I am admin
user5.admin?.()

let user6 = { firstName: 'John' }
let user7 = null
let key =   'firstName'
console.log(user6?.[key]) // John
console.log(user7?.[key]) // undefined
delete user7?.name