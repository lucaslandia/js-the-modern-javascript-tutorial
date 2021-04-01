// Method examples

let user = {
    name: 'John',
    age: 30,
}
user.sayHi = function () { console.log('Hello!') }
user.sayHi() // Hello!

// Method shorthand

console.log()
let user1 = {
    sayHi: function () { console.log('Hello!') }
}
user1.sayHi()

let user2 = {
    sayHi() { console.log('Hello!') }
}
user2.sayHi()

// "this" in methods

console.log()
let user3 = {
    name: 'John',
    age: 30,
    sayHi() { console.log(this.name) }
}
user3.sayHi() // John

// "this" is not bound

console.log()
let user4 = { name: 'John' }
let admin = { name: 'Admin'}
function sayHi() { console.log(this.name) }

user4.f = sayHi
admin.f = sayHi

user4.f() // John
admin.f() // Admin
admin['f']() // Admin
sayHi() // undefined

// Arrow functions have no "this"

/* If we reference this from such a function, it’s taken from the outer “normal” function. */

console.log()
let user5 = {
    firstName: 'Illya',
    sayHi() {
        let arrow = () => { console.log(this.firstName)} 
        arrow()
    }
}
user5.sayHi() // Illya