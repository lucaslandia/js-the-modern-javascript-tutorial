// Brevity is the soul of wit

/* Taken from a well-known javascript library */
let i = 0
i = i ? i < 0 ? Math.max(0, len + i) : i : 0

// One-letter variables

let a = 1
let b = 2
let c = 3

// Use abbreviations

let lst // list
let ua // userAgent
let browser // brsr

// Soar high. Be abstract.

let data1, data2, data3, item, value, obj, elem

// Attention test

let date, data

function showName() { console.log('name') }
function displayLastName() { console.log('last name') }

// Reuse names

function ninjaFunction(elem) {
    // 20 lines of code working with elem

    elem = clone(elem)

    // 20 more lines, now working with the clone of the elem!
}

// Underscores for fun

let _name, __value

// Show yout love

let superElement, megaFrame, niceItem

// Overlap outer variables

let user = authenticateUser()

function render() {
    let user = anotherValue()
    //   ...
    //   ...many lines...
    //   ...
    //   ... <-- a programmer wants to work with user here and...
    //   ...
}

function authenticateUser() { console.log('Authenticated') }

// Side-effect everywhere!

function checkPermission() {
    // Some side effect changing something...

    return {
        a: 1,
        b: 2,
        c: 3
    }
}

// Powerful functions!

function validateEmail() {
    // Validate email, show error, ask to re enter, etc...
}

