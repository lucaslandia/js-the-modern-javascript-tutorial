function sayHi() { console.log('Hello') } // Function declaration.
sayHi()

let sayHiAgain = function () { console.log("Hello again!") }
sayHiAgain()

console.log()
console.log(sayHi)
console.log(sayHiAgain)

console.log()
function otherSayHi() { console.log('Hiiii') }
const func = otherSayHi
func()

// Callbacks functions

console.log()
function ask(question, yes, no) {
    console.log(question)
    if (true) yes()
    else no()
}
function showOk() { console.log('You agreed.') }
function showCancel() { console.log('You canceled the execution.') }
ask('Do you agree?', showOk, showCancel)

console.log()
    ; (function askAgain(question, yes, no) {
        console.log(question)
        if (false) yes()
        else no()
    })(
        'Do you agree?',
        function () { console.log('You agreed.') },
        function () { console.log('You canceled the excecution.') }
    )

// Function Expression vs Function Declaration

saySomething('John') // This works.
function saySomething(something) { console.log(something) }

// saySomethingAgain('John') // This don't works.
const saySomethingAgain = function (something) { console.log(something) }

console.log()
'use strict'
console.log('What is your age?')
let age = 35
if (age < 18) {
    function welcome() { console.log('Hello!') }
} else {
    function welcome() { console.log('Greetings!') }
}
// welcome() // Uncaught ReferenceError: welcome is not defined

console.log()
console.log('What is your age?')
let age1 = 34
let welcome = age1 < 18 ?
    function () { console.log('Hello!') } :
    function () { console.log('Greetings!') }
welcome()