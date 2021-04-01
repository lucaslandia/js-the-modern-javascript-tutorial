// Array destructuring

let arr = ['Ilya', 'Kantor']

let [firstName, surname] = arr
console.log(firstName) // Ilya
console.log(surname) // Kantor

let [firstName1, surname1] = 'Ilya Kantor'.split(' ')
console.log(firstName1) // Ilya
console.log(surname1) // Kantor

const [firstName2, , title] = ['Julius', 'Caesar', 'Consul', 'of the Roman Republic']
console.log(title) // Consul

const [a, b, c] = 'abc'
const [one, two, three] = new Set([1, 2, 3])
console.log(`${a} ${b} ${c}`) // a b c
console.log(`${one} ${two} ${three}`) // 1 2 3

const user = {}
    ;[user.name, user.surname] = 'Ilya Kantor'.split(' ')
console.log(user.name) // Ilya

let user1 = {
    name: 'John',
    age: 30
}
for (const [key, value] of Object.entries(user1))
    console.log(`${key}: ${value}`) // name: John, age: 30

let guest = 'Jane'
let admin = 'Pete'
    ;[admin, guest] = [guest, admin]
console.log(`guest: ${guest}`) // guest: Pete
console.log(`admin: ${admin}`) // admin: Jane

/// The rest '...'

console.log()
let [name1, name2, ...rest] = ['Julius', 'Caesar', 'Consul', 'of the Roman Republic']
console.log(name1) // Julius
console.log(name2) // Caesar
console.log(rest[0]) // Consul
console.log(rest[1]) // of the Roman Republic

// Default values

console.log()
let [firstName3, surname2] = []
console.log(firstName3) // undefined
console.log(surname2) // undefined

let [name3 = 'Guest', surname3 = 'Anonymous'] = ['Julius']
console.log(name3) // Julius
console.log(surname3) // Anoymous

// Object destructuring

console.log()
let options = {
    title1: 'Menu',
    width: 100,
    height: 200
}

const { title1, width, height } = options
console.log(title1) // Menu
console.log(width) // 100
console.log(height) // 200

const { width: w, height: h, title1: t } = options
console.log(t) // Menu
console.log(w) // 100
console.log(h) // 200

const { width: theWidth, depth: theDepth = 70 } = options
console.log(theWidth) // 100
console.log(theDepth) // 70

/// The rest pattern '...'

console.log()
let options1 = {
    title: "Menu",
    height: 200,
    width: 100
}

let { title: title2, ...rest1 } = options1
console.log(title2) // Menu
console.log(rest1) // { height: 200, width: 100 }

let title3, width3, height3
({ title: title3, width: width3, height: height3 } = { title: 'Menu', width: 200, height: 100 })
console.log(title3) // Menu
console.log(width3) // 200
console.log(height3) // 100

// Nested destructuring

console.log()
const options2 = {
    size: {
        width: 100,
        heigth: 200
    },
    items: ['Cake', 'Donut'],
    extra: true
}

const {
    size: {
        width: width4,
        heigth: height4
    },
    items: [item1, item2],
    title4 = 'Menu'
} = options2

console.log(width4)
console.log(height4)
console.log(item1)
console.log(item2)
console.log(title4)

// Smart function parameters

console.log()
const options3 = {
    title: 'My menu',
    items: ['Item1', 'Item2']
}

function showMenu({ title = 'untitled', width: w = 200, height: h = 100, items = [] } = {}) {
    console.log(`${title} ${w} ${h}`)
    console.log(items)
}

showMenu()
showMenu(options3)