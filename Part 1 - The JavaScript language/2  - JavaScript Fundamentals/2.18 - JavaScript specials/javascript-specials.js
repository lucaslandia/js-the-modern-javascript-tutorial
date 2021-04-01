// Code structure

/* Automatic semicolon insertion */
console.log('Hello'); console.log('World')
console.log('Hello')
console.log('World')


// Strict mode

'use strict' // The directive must be at the top of a script or at the beginning of a function body.

// Variables

console.log()
let x = 5
x = 'John'
console.log(x)

console.log(typeof null == 'object') // true
console.log(typeof function () { } == 'function') // true

// Interaction

/* prompt(question, [default])
Ask a question, and return either what the visitor entered or null if they clicked “cancel”.

confirm(question)
Ask a question and suggest to choose between Ok and Cancel. The choice is returned as true/false.

alert(message)
Output a message. 

All these functions are modal, they pause the code execution and prevent the visitor from 
interacting with the page until they answer. */

// Operators

/* 
Arithmetical
Assignments
Bitwise
Conditional
Logical
Nullish coalescing operator
Comparisons
Other operators (like comma)
*/

// Loops

/*
while (condition) {
    ...
}
  
do {
...
} while (condition);

for(let i = 0; i < 10; i++) {
...
} */

// The "switch" construct

console.log()
let age = '18'
switch (age) {
    case 18: console.log('Won\'t work'); break
    case "18": console.log('This works!'); break // It uses === (strict equality) for comparisons.
    default: console.log('Any value not equal to one above')
}

// Functions

/* Function Declaration: the function in the main code flow. */

function sum(a, b) {
    let result = a + b
    return result
}

/* Function Expression: the function in the context of an expression. */

let sum1 = function (a, b) {
    let result = a + b
    return result
}

/* Arrow functions: */

let sum2 = (a, b) => a + b

let sum3 = (a, b) => {
    // ...
    return a + b
}

let sayHi = () => console.log("Hello")

let double = n => n * 2

/* Functions always return something. If there’s no return statement, then the result is undefined */
console.log((() => { console.log('Something to say') })())