// Constructor function

function User(name) {
    // this = {} (implicitly)
    this.name = name,
        this.isAdmin = false
    // return this (implicitly)
}

let user = new User('Jack')

console.log(user.name) // Jack
console.log(user.isAdmin) // false


let user1 = new function () {
    this.name = 'John'
    this.isAdmin = false
    // ...other code for user creation
    // maybe complex logic and statements
    // local variables etc
}
console.log(user1) // { name: 'John', isAdmin: false }

// Constructor mode test: new.target

console.log()
function User1() { console.log(new.target) }
User1() // undefined
new User1() // [Function: User1]

function User2(name) {
    if (!new.target) return new User2(name)
    this.name = name
}
let john = User2('John')
console.log(john.name) // John

// Return from constructors

console.log()
function BigUser() {
    this.name = 'John'
    return { name: 'Godzilla' }
}
console.log(new BigUser().name) // Godzilla

function SmallUser() {
    this.name = 'John'
    return 'primitive value'
}
console.log(new SmallUser().name) // John

function UserOmittingParentheses() {
    this.name = 'Joe'
}
console.log(new UserOmittingParentheses) // { name: 'Joe' }

// Methods in constructors

console.log()
function User3(name) {
    this.name = name
    this.sayHi = function () { console.log('My name is ' + this.name) }
}
let john1 = new User3('John')
john1.sayHi()