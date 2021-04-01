/* Sum all numbers till the given one

Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

For instance:

sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

Make 3 solution variants:

1. Using a for loop.
2. Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
3. Using the arithmetic progression formula.

An example of the result:

function sumTo(n) { ... your code ...  }
alert( sumTo(100) ); // 5050

P.S. Which solution variant is the fastest? The slowest? Why?

P.P.S. Can we use recursion to count sumTo(100000)? */

console.log(sumTo(100))

// For loop
function sumTo(num) {
    let sum = 0
    for (let i = 1; i <= num; i++)
        sum += i
    return sum
}

// Recursion
function sumTo(num) {
    return num == 1 ? num : num + sumTo(num - 1)
}

// Arithmetic progression
function sumTo(num) {
    return num * (1 + num) / 2
}