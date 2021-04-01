// Function declaration

function showMessage() { console.log('Hello everyone!') }
showMessage()
showMessage()

// Local variables

function showMessage() {
    let message = 'Hello, I\'m JavaScript'
    console.log(message)
}

showMessage()
// console.log(message) // Error. The variable is local to the function

// Outer variables

/* Variables declared outside of any function, such as the outer userName in the code above, are called global. */

console.log()
let userName = 'John'

function showMessage() {
    let userName = 'Bob'
    let message = 'Hello ' + userName
    console.log(message)
}

showMessage()
console.log(userName)

// Parameters

console.log()
function showMessage(from, text) { console.log(from + ': ' + text) }
showMessage('Ann', 'Hello!')
showMessage('Ann', 'What\'s up?')

console.log()
function showMessage(from, text) {
    from = '*' + from + '*'
    console.log(from + ': ' + text)
}
let from = 'Ann'
showMessage(from, 'Hello')
console.log(from)

// Default values

console.log()
function showMessage(from, text) { console.log(from + ": " + text) }
showMessage('Ann') // Ann: undefined

function showMessage(from, text = 'no text given') { console.log(from + ": " + text) }
showMessage('Ann') // Ann: no text given

function showMessage(from, text = anotherFunction()) { console.log(from + ": " + text) }
function anotherFunction() { return 'no text' }
showMessage('Ann') // Ann: no text

// Alternative default parameters

console.log()
function showMessage(text) {
    if (text === undefined) text = 'empty message'
    console.log(text)
}
showMessage()

function showMessage(text) {
    text = text || 'empty'
    console.log(text)
}
showMessage()

function showCount(count) { console.log(count ?? 'unknown') }
showCount(0) // 0
showCount(null) // unknown
showCount() // unknown

// Returning  a value

console.log()
function sum(a, b) { return a + b }
const result = sum(2, 5)
console.log(result) // 7

function doNothing() { }
console.log(doNothing() === undefined) // true

function doNothingAgain() { return }
console.log(doNothingAgain() === undefined) // true

function returnSomething() {
    return
    ('some' + 'long' + 'expression' + 'or' + 'whatever') // Never add a newline between return and the value
}
returnSomething()

// Naming a function

/*
showMessage(..)     // shows a message
getAge(..)          // returns the age (gets it somehow)
calcSum(..)         // calculates a sum and returns the result
createForm(..)      // creates a form (and usually returns it)
checkPermission(..) // checks a permission, returns true/false 
*/

// Functions == Comments

function showPrimes(n) {
    nextPrime: for (let i = 2; i < n; i++) {
        for (let j = 2; j < i; j++)
            if (i % j == 0) continue nextPrime
        console.log(i) // a prime
    }
}

function showPrimes(n) {
    for (let i = 2; i < n; i++) {
        if (!isPrime(i)) continue
        console.log(i)  // a prime
    }
}

function isPrime(n) {
    for (let i = 2; i < n; i++)
        if (n % i == 0) return false
    return true
}