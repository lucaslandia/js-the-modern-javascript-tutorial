// Quotes

let single = 'single-quoted'
console.log(single)
let double = "double-quoted"
console.log(double)
let backticks = `backticks`
console.log(backticks)

function sum(a, b) {
    return a + b
}
console.log(`1 + 2 = ${sum(1, 2)}.`) // 1 + 2 = 3.

let guestList = `Guests:
* John
* Pete
* Mary`
console.log(guestList) // Guests: * John * Pete * Mary

// Special characters

let guestList1 = 'Guests:\n* John\n* Pete\n* Mary'
console.log(guestList1) // Guests: * John * Pete * Mary

let str1 = 'Hello\nWorld'
let str2 = `Hello
World`
console.log(str1 == str2) // true

console.log('\u00A9')
console.log('\u{20331}')
console.log('\u{1F60D}')

console.log('I\'m the Walrus') // I'm the Walrus
console.log(`The backslash: \\`) // The backslash: \

// String length

console.log()
console.log('My\n'.length) // 3

// Accesing characters

console.log()
let str = `Hello`
console.log(str[0]) // H
console.log(str.charAt(0)) // H
console.log(str[str.length - 1]) // o
console.log(str[1000]) // undefined
console.log(str.charAt(0)) // ''

for (let char of 'Hello')
    console.log(char) // H, e, l, l, o

// Strings are inmutable

console.log()
let str3 = 'Hi'
str3[0] = 'Z'
console.log(str3) // Hi

let str4 = 'Hi'
str4 = 'h' + str4[1]
console.log(str4) // hi

// Changing the case

console.log('Interface'.toUpperCase()) // INTERFACE
console.log('Interface'.toLowerCase()) // Interface
console.log('Interface'[0].toLowerCase()) // i

// Searching for a substring

/// str.indexOf

console.log()
let str5 = 'Widget with id'
console.log(str5.indexOf('Widget')) // 0
console.log(str5.indexOf('widget')) // -1
console.log(str5.indexOf('id')) // 1
console.log(str5.indexOf('id', 2)) // 12

let str6 = 'As sly as a fox, as strong as an ox'
let target = 'as'

console.log()
let pos = -1
while ((pos = str6.indexOf(target, pos + 1)) != -1)
    console.log(pos) // 7, 17, 27

console.log()
let pos1 = str6.length + 1
while ((pos1 = str6.lastIndexOf(target, pos1 - 1)) != -1)
    console.log(pos1) // 27, 17, 7

// The bitwise NOT trick

console.log()
console.log(~2) // -3, the same as -(2+1)
console.log(~1) // -2
console.log(~0) // -1
console.log(~-1) // 0

let str7 = 'Widget'
if (~str7.indexOf('Widget'))
    console.log('Found it!')

// includes, startsWith, endsWith

console.log()
console.log('Widget with id'.includes('Widget')) // true
console.log('Hello'.includes('Bye')) // false
console.log('Widget'.includes('id')) // true
console.log('Widget'.includes('id', 3)) // false

console.log('Widget'.startsWith('Wid')) // true
console.log('Widget'.endsWith('get')) // true

// Getting a substring

console.log()
let str8 = 'stringify'

/* Returns the part of the string from start to (but not including) end. */
console.log(str8.slice(0, 5)) // strin
console.log(str8.slice(2)) // ringify
console.log(str8.slice(-4, -1)) // gif

/* Returns the part of the string between start and end.
This is almost the same as slice, but it allows start to be greater than end. 
Negative arguments are (unlike slice) not supported, they are treated as 0.*/
console.log(str8.substring(2, 6)) // ring
console.log(str8.substring(6, 2)) // ring

/* In contrast with the previous methods, this one allows us to specify the length instead of the 
ending position: */
console.log(str8.substr(2, 4)) // ring

// Comparing strings

console.log()
console.log('a' > 'Z') // true
console.log('Österreich' > 'Zealand') // true

console.log('z'.codePointAt(0)) // 122
console.log('Z'.codePointAt(0)) // 90
console.log(String.fromCodePoint(90)) // Z
console.log('\u005a') // Z

let str9 = ''
for (let i = 65; i <= 220; i++)
    str9 += String.fromCodePoint(i)
console.log(str9)
/* ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~ ¡
¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ */

// Correct comparisons

console.log()
console.log('Österreich'.localeCompare('Zealand')) // -1

// Internals, Unicode

/// Surrogate pairs

console.log()
console.log('𝒳'.length) // 2, mathematical script capital x
console.log('😂'.length) // 2, face with tears of joy
console.log('𩷶'.length) // 2, a rare Chinese hieroglyph

/* String.fromCodePoint and str.codePointAt are few rare methods that deal with surrogate pairs right. 
They recently appeared in the language. Before them, there were only String.fromCharCode and 
str.charCodeAt. These methods are actually the same as fromCodePoint/codePointAt, but don’t work with 
surrogate pairs. */

console.log('𝒳'[0]) // strange symbols...
console.log('𝒳'[1]) // ...pieces of the surrogate pair

/* charCodeAt is not surrogate-pair aware, so it gives codes for parts */
console.log('𝒳'.charCodeAt(0).toString(16)) // d835, between 0xd800 and 0xdbff
console.log('𝒳'.charCodeAt(1).toString(16)) // dcb3, between 0xdc00 and 0xdfff

/// Diacritical marks and normalization

console.log()
console.log('S\u0307') // Ṡ
console.log('S\u0307\u0323') // Ṩ

let s1 = 'S\u0307\u0323'
let s2 = 'S\u0323\u0307'
console.log(`s1: ${s1}, s2: ${s2}`) // s1: Ṩ, s2: Ṩ
console.log(s1 == s2) // false

console.log('S\u0307\u0323'.normalize() == 'S\u0323\u0307'.normalize()) // true

console.log('S\u0307\u0323'.normalize().length) // 1
console.log('S\u0307\u0323'.normalize() == '\u1e68') // true