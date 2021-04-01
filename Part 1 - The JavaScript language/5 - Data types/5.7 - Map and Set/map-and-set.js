// Map

const map = new Map()
map.set('1', 'str1') // string key
map.set(1, 'num1') // numeric key
map.set(true, 'bool1') // boolean key
console.log(map.get(1)) // num1
console.log(map.get('1')) // str1
console.log(map.size) // 3

/// Map can also use objects as keys

console.log()
const john = { name: 'John' }

const visitsCountMap = new Map()
visitsCountMap.set(john, 123)
console.log(visitsCountMap.get(john)) // 123

const visitsCountMap1 = {}
visitsCountMap1[john] = 123
console.log(visitsCountMap1) // { '[object Object]': 123 }

// Iteration over Map

console.log()
const recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
])
for (const vegetable of recipeMap.keys())
    console.log(vegetable)
for (const amount of recipeMap.values())
    console.log(amount)
for (const entry of recipeMap.entries())
    console.log(entry)
recipeMap.forEach((value, key, map) => {
    console.log(`${key}: ${value}`) // cucumber: 500...
})

// Object.entries: Map from Object

console.log()
const obj = {
    name: 'John',
    age: 30
}

const map1 = new Map(Object.entries(obj))
console.log(map1)
console.log(map1.get('name'))

// Object.fromEntries: Object from Map

console.log()
let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
])
console.log(prices.orange) // 2

const map2 = new Map()
map.set('banana', 1)
    .set('orange', 2)
    .set('meat', 4)
let obj = Object.fromEntries(map.entries())
console.log(obj.orange) // 2
let obj1 = Object.fromEntries(map)
console.log(obj1.orange) // 2

// Set

console.log()
const set = new Set()
const john1 = { name: 'John' }
const pete = { name: 'Pete' }
const mary = { name: 'Mary' }
set.add(john1)
    .add(pete)
    .add(mary)
    .add(john1)
    .add(mary)
console.log(set.size) // 3
for (const user of set)
    console.log(user.name) // John, Pete, Mary

// Iteration over Set

console.log()
const set1 = new Set(['oranges', 'apples', 'bananas'])
for (const value of set1)
    console.log(value) // oranges, apples, bananas
set1.forEach((value, valueAgain, set) => {
    console.log(value) // oranges, apples, bananas
})