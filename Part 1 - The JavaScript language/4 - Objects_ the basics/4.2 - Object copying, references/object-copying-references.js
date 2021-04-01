let user = { name: 'John' }
let admin = user
admin.name = 'Pete'
console.log(user.name) // Pete

// Comparison by reference

console.log()
let a = {}
let b = a
console.log(a == b) // true
console.log(a === b) // true

let c = {}
let d = {}
console.log(c == d) // false
console.log(c === d) // false

// Cloning and merging, Object.assign

console.log()
let user1 = {
    name: 'John',
    age: 30,
}
let clone = {}
for (const key in user1) clone[key] = user1[key]
console.log(clone) // { name: 'John', age: 30 }

let user2 = { name: 'John' }
let permissions1 = { canView: true }
let permissions2 = { canEdit: true }
Object.assign(user2, permissions1, permissions2)
console.log(user2) // { name: 'John', canView: true, canEdit: true }

let user3 = { name: 'John'}
Object.assign(user3, { name: 'Pete'})
console.log(user3) // { name: 'Pete' }

let user4 = {
    name: 'John',
    age: 30,
}
let clone1 = Object.assign({}, user4)
console.log(clone1) // { name: 'John', age: 30 }

// Nested cloning

function deepClone(obj) {
    let clone = {}
    for (const key in obj)
        clone[key] = typeof obj[key] === 'object'
            ? deepClone(obj[key])
            : obj[key]
    return clone
}

console.log()
let user5 = {
    name: 'John',
    sizes: {
        height: 182,
        width: 50
    }
}

let clone2 = deepClone(user5)
console.log(clone2) // { name: 'John', sizes: { height: 182, width: 50 } }