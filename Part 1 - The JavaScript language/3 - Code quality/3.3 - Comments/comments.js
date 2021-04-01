// Recipe: factor out functions

function showPrimes(n) {
    nextPrime:
    for (let i = 2; i < n; i++) {

        // check if i is a prime number
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime
        }

        console.log(i)
    }
}

/* Refactor: */

function showPrimes(n) {
    for (let i = 0; i < n; i++) {
        if (!isPrime(i)) continue
        console.log(i)
    }
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false
    }

    return true
}

showPrimes(10)

// Recipe: create functions

let glass = 'glass'

// here we add whiskey
for (let i = 0; i < 10; i++) {
    let drop = getWhiskey()
    smell(drop)
    add(drop, glass)
}

// here we add juice
for (let t = 0; t < 3; t++) {
    let tomato = getTomato()
    examine(tomato)
    let juice = press(tomato)
    add(juice, glass)
}

function getWhiskey() { return 'whiskey' }

function smell(drop) { return 'whiskey ' + drop }

function add(drop, glass) { console.log(`${drop} ${glass}`) }

function examine(tomato) { return 'it\'s good ' + tomato }

function press(tomato) { return tomato + ' juice!' }

/* Refactor: */

addWhiskey(glass)
addJuice(glass)

function addWhiskey(container) {
    for (let i = 0; i < 10; i++) {
        let drop = getWhiskey()
        console.log(drop)
    }
}

function addJuice(container) {
    for (let t = 0; t < 3; t++) {
        let tomato = getTomato()
        console.log(tomato)
    }
}

function getTomato() { return 'tomato' }

// Good comments

/**
 * Returns x raised to the n-th power.
 *
 * @param {number} x The number to raise.
 * @param {number} n The power, must be a natural number.
 * @return {number} x raised to the n-th power.
 */

function pow(x, n) {
    //...
}