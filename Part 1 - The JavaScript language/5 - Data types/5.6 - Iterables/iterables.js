// Symbol.Iterator

let range = {
    from: 1,
    to: 5
}

range[Symbol.iterator] = function () {
    return {
        current: this.from,
        last: this.to,
        next() {
            if (this.current <= this.last)
                return { done: false, value: this.current++ }
            else
                return { done: true }
        }
    }
}

for (const num of range)
    console.log(num) // 1, 2, 3, 4, 5

console.log()
let range1 = {
    from: 1,
    to: 5,
    [Symbol.iterator]() {
        this.current = this.from
        return this
    },
    next() {
        if (this.current <= this.to)
            return { done: false, value: this.current++ }
        else
            return { done: true }
    }
}

for (const num of range1)
    console.log(num)

// String is iterable

console.log()
for (const char of 'test')
    console.log(char) // t, e, s, t

console.log()
const str = '𝒳😂'
for (const char of str)
    console.log(char) // 𝒳, 😂

// Calling an iterator explicity

console.log()
const str1 = 'Hello'
const iterator = str1[Symbol.iterator]()
while (true) {
    const result = iterator.next()
    if (result.done) break
    console.log(result.value) // H, e, l, l, o
}

// Iterables and array-likes

/* - Iterables are objects that implement the Symbol.iterator method.
- Array-likes are objects that have indexes and length, so they look like arrays. */

let arrayLike = {
    0: 'Hello',
    1: 'World',
    length: 2
}

// for (const num of arrayLike) { } // Error: arrayLike is not iterable

/* Both iterables and array-likes are usually not arrays, they don’t have push, pop, etc. */

// Array.from

console.log()
const arrayLike1 = {
    0: 'Hello',
    1: 'World',
    length: 2
}

const arr = Array.from(arrayLike1)
console.log(arr.pop()) // World

const iterable = {
    from: 1,
    to: 5,
    [Symbol.iterator]() {
        return {
            current: this.from,
            last: this.to,
            next() {
                return this.current <= this.last
                    ? { done: false, value: this.current++ }
                    : { done: true }
            }
        }
    }
}

const arr1 = Array.from(iterable)
console.log(arr1.pop()) // 5

const arr2 = Array.from(iterable, num => num * num)
console.log(arr2) // [ 1, 4, 9, 16, 25 ]

let str2 = '𝒳😂'

let chars = Array.from(str2)
console.log(chars[0]) // 𝒳
console.log(chars[1]) // 😂
console.log(chars.length) // 2

// Array.from internally does the same loop.
let chars1 = [] 
for (const char of str2)
    chars1.push(char)
console.log(chars1) // [ '𝒳', '😂' ]

function slice(str, start, end) {
    return Array.from(str2).slice(start, end).join('')
}
console.log(slice(str2, 1, 3)) // 😂
console.log(str2.slice(1, 3)) // ��, garbage (two pieces from different surrogate pairs).