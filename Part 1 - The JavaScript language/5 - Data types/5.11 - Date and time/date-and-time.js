// Creation

const now = new Date()
console.log(now) // 2020-07-11T19:16:48.733Z, actual date

const Jan01_1970 = new Date(0)
console.log(Jan01_1970) // 1970-01-01T00:00:00.000Z
const Jan02_1940 = new Date(24 * 3600 * 1000)
console.log(Jan02_1940) // 1970-01-02T00:00:00.000Z
const Dec31_1969 = new Date(-24 * 3600 * 1000)
console.log(Dec31_1969) // 1969-12-31T00:00:00.000Z

const date = new Date('2017-01-26')
console.log(date) // 2017-01-26T00:00:00.000Z

const date1 = new Date(2011, 0, 1, 0, 0, 0, 0)
console.log(date1) // 2011-01-01T03:00:00.000Z
const date2 = new Date(2011, 0, 1)
console.log(date2) // 2011-01-01T03:00:00.000Z
let date3 = new Date(2011, 0, 1, 2, 3, 4, 567)
console.log(date3) // 2011-01-01T05:03:04.567Z

// Access date components

console.log()
const date4 = new Date(2017, 1, 10, 12, 25, 40, 345)
console.log(date4) // 2017-02-10T15:25:40.345Z

console.log(date4.getFullYear()) // 2017
console.log(date4.getMonth()) // 1
console.log(date4.getDate()) // 10
console.log(`${date4.getHours()} ${date4.getMinutes()} ${date4.getSeconds()} ${date4.getMilliseconds()}`) // 12 25 40 345
console.log(date4.getDay()) // 5 (Friday)

console.log(date4.getUTCFullYear()) // 2017
console.log(date4.getUTCMonth()) // 1
console.log(date4.getUTCDate()) // 10
console.log(`${date4.getUTCHours()} ${date4.getUTCMinutes()} ${date4.getUTCSeconds()} ${date4.getUTCMilliseconds()}`) // 12 25 40 345
console.log(date4.getUTCDay()) // 5 (Friday)

console.log(date4.getTime()) // 1486740340345
console.log(date4.getTimezoneOffset()) // 180

// Setting date components

console.log()
const today = new Date()
console.log(today) // 2020-07-11T19:46:23.066Z

today.setFullYear(2019)
console.log(today) // 2019-07-11T19:50:02.394Z
today.setMonth(0)
console.log(today) // 2019-01-11T19:50:58.069Z
today.setDate(15)
console.log(today) // 2019-01-15T21:11:05.772Z
today.setHours(13)
console.log(today) // 2019-01-15T16:12:06.282Z
today.setMinutes(30)
console.log(today) // 2019-01-15T16:30:55.018Z
today.setSeconds(10)
console.log(today) // 2019-01-15T16:30:10.637Z
today.setMilliseconds(999)
console.log(today) // 2019-01-15T16:30:10.999Z
today.setTime(0)
console.log(today) // 2019-01-15T16:30:10.999Z

console.log()
today.setUTCFullYear(2019)
console.log(today) // 2019-01-01T00:00:00.000Z
today.setUTCMonth(0)
console.log(today) // 2019-01-01T00:00:00.000Z
today.setUTCDate(15)
console.log(today) // 2019-01-15T00:00:00.000Z
today.setUTCHours(13)
console.log(today) // 2019-01-15T13:00:00.000Z
today.setUTCMinutes(30)
console.log(today) // 2019-01-15T13:30:00.000Z
today.setUTCSeconds(10)
console.log(today) // 2019-01-15T13:30:10.000Z
today.setUTCMilliseconds(999)
console.log(today) // 2019-01-15T13:30:10.999Z

// Autocorrection

console.log()
let date5 = new Date(2013, 0, 32)
console.log(date5) // 2013-02-01T03:00:00.000Z

let date6 = new Date(2016, 0, 2)
date6.setDate(1)
console.log(date6) // 2016-01-01T03:00:00.000Z
date6.setDate(0)
console.log(date6) // 2015-12-31T03:00:00.000Z

// Date to number, date diff

console.log()
let date7 = new Date()
console.log(+date7) // 1594502783428
console.log(date7.getTime()) // 1594502783428

const start = new Date()
for (let i = 0; i < 1000000; i++) {
    const doSomething = i * i * i
}
const end = new Date()
console.log(`The loop took ${end - start} ms`) // The loop took 8 ms

// Date.now()

console.log()
const start1 = Date.now() // milliseconds count from 1 Jan 1970
for (let i = 0; i < 1000000; i++) {
    const doSomething = i * i * i      
}
const end1 = Date.now()
console.log(`The loop took ${end - start} ms`) // The loop took 8 ms

// Benchmarking

console.log()

function diffSubtract(date1, date2) {
    return date2 - date1
}

function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime()
}

function bench(f) {
    const date1 = new Date(0), 
        date2 = new Date(), 
        start = Date.now()
    for (let i = 0; i < 1000000; i++)
        f(date1, date2)
    return Date.now() - start

}

let time1 = time2 = 0
for (let i = 0; i < 10; i++)
    time1 += bench(diffSubtract), time2 += bench(diffGetTime)

console.log(`Total time for diffSubtract: ${time1}`) // Total time for diffSubtract: 1156
console.log(`Total time for diffGetTime: ${time2}`) // Total time for diffGetTime: 96

// Date.parse from a string

console.log()
const ms = Date.parse('2012-01-26T13:51:50.417-07:00')
console.log(ms) // 1327611110417
console.log(new Date(ms)) // 2012-01-26T20:51:50.417Z
console.log(Date.parse('Invalid date')) // NaN