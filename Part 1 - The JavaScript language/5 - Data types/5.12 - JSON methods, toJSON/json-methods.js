// JSON.stringify

const student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
}
const json = JSON.stringify(student)
console.log(typeof json) // string
console.log(json) // {"name":"John","age":30,"isAdmin":false,"courses":["html","css","js"],"wife":null}

console.log()
console.log(JSON.stringify(1)) // 1
console.log(JSON.stringify('test')) // "test"
console.log(JSON.stringify(true)) // true
console.log(JSON.stringify([1, 2, 3])) // [1, 2, 3]

console.log()
let user = {
    sayHi() {
        console.log('Hi')
    },
    [Symbol('id')]: 123,
    something: undefined
}
console.log(JSON.stringify(user)) // {}

let meetup = {
    title: 'Conference',
    room: {
        number: 23,
        participants: ['John', 'Ann']
    }
}
console.log(JSON.stringify(meetup)) // {"title":"Conference","room":{"number":23,"participants":["John","Ann"]}}

let room = {
    number: 23
}
let meetup1 = {
    title: 'Conference',
    participants: ['John', 'Ann']
}
meetup1.place = room
room.occupiedBy = meetup1
// JSON.stringify(meetup1) // TypeError: Converting circular structure to JSON

// Excluding and transforming: replacer

console.log()
let room2 = {
    number: 23
}
let meetup2 = {
    title: 'Conference',
    participants: [{ name: 'John' }, { name: 'Alice' }],
    place: room
}
room.occupiedBy = meetup2
console.log(JSON.stringify(meetup2, ['title', 'participants'])) // {"title":"Conference","participants":[{},{}]}
console.log(JSON.stringify(meetup2, ['title', 'participants', 'place', 'name', 'number'])) // {"title":"Conference","participants":[{"name":"John"},{"name":"Alice"}],"place":{"number":23}}

console.log()
console.log(JSON.stringify(meetup2, function replacer(key, value) {
    console.log(`${key} ${value}`)
    return (key == 'occupiedBy') ? undefined : value
}))
/*
 [object Object]
title Conference
participants [object Object],[object Object]
0 [object Object]
name John
1 [object Object]
name Alice
place [object Object]
number 23
occupiedBy [object Object]
{"title":"Conference","participants":[{"name":"John"},{"name":"Alice"}],"place":{"number":23}}
*/

// Formatting: space

console.log()
const user2 = {
    name: 'John',
    age: 25,
    roles: {
        isAdmin: false,
        isEditor: true
    }
}
console.log(JSON.stringify(user2, null, 2))

// Custom "toJSON"

console.log()
let room3 = {
    number: 23
}
let meetup3 = {
    title: "Conference",
    date: new Date(Date.UTC(2017, 0, 1)),
    room3
}

console.log(JSON.stringify(meetup3)) // {"title":"Conference","date":"2017-01-01T00:00:00.000Z","room3":{"number":23}}
console.log(JSON.stringify(room3)) // {"number":23}

room3.toJSON = function toJSON() {
    return this.number
}
console.log(JSON.stringify(meetup3)) // {"title":"Conference","date":"2017-01-01T00:00:00.000Z","room3":23}

// JSON.parse

console.log()
const numbers = '[0, 1, 2, 3]'
const numbersParsed = JSON.parse(numbers)
console.log(numbersParsed) // [ 0, 1, 2, 3 ]

const userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }'
const userParsed = JSON.parse(userData)
console.log(userParsed.friends[1]) // 1

// Using reviver

console.log()
const str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}'

const meetup4 = JSON.parse(str)
console.log(typeof meetup4.date) // string

const meetup5 = JSON.parse(str, function (key, value) {
    if (key == 'date')
        return new Date(value)
    return value
})
console.log(typeof meetup5.date) // object

const schedule = `{
    "meetups": [
      {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
      {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
    ]
  }`
const parsedSchedule = JSON.parse(schedule, function (key, value) {
    if (key == 'date')
        return new Date(value)
    return value
})
console.log(parsedSchedule.meetups[1].date.getDate()) // 18
