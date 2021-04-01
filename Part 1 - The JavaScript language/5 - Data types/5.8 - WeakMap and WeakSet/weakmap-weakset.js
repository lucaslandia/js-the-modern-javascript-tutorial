let john = { name: 'John' }
let weakMap = new WeakMap()
weakMap.set(john, '...')
john = null // overwrite the reference
// john is removed from memory!
console.log(weakMap.get(john)) // undefined

// Use case: additional data

console.log()

// visitCount.js
let visitsCountMap = new WeakMap()
function countUser(user) {
    let count = visitsCountMap.get(user  ) || 0
    visitsCountMap.set(user, -~count)
}

// main.js
let john1 = { name: 'John' }
countUser(john1)
console.log(visitsCountMap.get(john1))
john1 = null
console.log(visitsCountMap.get(john1))

// Use case: caching

console.log()

// cache.js
let cache = new WeakMap()
function process(obj) {
    if (!cache.has(obj)) {
        let result = /* Calculate some result */ obj
        cache.set(obj, result)
    }
    return cache.get(obj)
}

// main.js

let obj = { key: 'value'}
const result1 = process(obj)
const result2 = process(obj)
obj = null
console.log(cache.get(obj)) // undefined

// WeakSet

console.log()
let visitedSet = new WeakSet()
let john2 = { name: 'John' }
let pete = { name: 'Pete' }
let mary = { name: 'Mary' }

visitedSet.add(john2)
    .add(pete)
    .add(john2)
console.log(visitedSet.has(john2)) // true
console.log(visitedSet.has(mary)) // false
john2 = null
console.log(visitedSet.has(john2)) // false