// Object.keys, values, entries

/* The first difference is that we have to call Object.keys(obj), and not obj.keys().

Why so? The main reason is flexibility. Remember, objects are a base of all complex structures in 
JavaScript. So we may have an object of our own like data that implements its own data.values() 
method. And we still can call Object.values(data) on it.

The second difference is that Object.* methods return “real” array objects, not just an iterable. 
That’s mainly for historical reasons. */

let user = {
    name: 'John',
    age: 30
}

console.log(Object.keys(user)) // [ 'name', 'age' ]
console.log(Object.values(user)) // [ 'John', 30 ]
console.log(Object.entries(user)) // [ [ 'name', 'John' ], [ 'age', 30 ] ]

// Transforming objects

let prices = {
    banana: 1,
    orange: 2,
    meat: 4
}
let doublePrices = Object.fromEntries(
    Object.entries(prices).map(([key, value]) => [key, value * 2])
)
console.log(prices)