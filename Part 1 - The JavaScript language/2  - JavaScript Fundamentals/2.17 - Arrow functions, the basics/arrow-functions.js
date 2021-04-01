let sum = (a, b) => a + b
console.log(sum(1, 2)) // 3

let double = n => n * 2
console.log(double(3)) // 6

let sayHi = () => console.log('Hello!')
sayHi()

let age = 18
let welcome = (age < 18) ?
    () => console.log('Hello') :
    () => console.log('Greetings!')
welcome()

// Multiline arrow functions

let multilineSum = (a, b) => { 
    let result = a + b
    return result
}
console.log(multilineSum(1, 2)) // 3