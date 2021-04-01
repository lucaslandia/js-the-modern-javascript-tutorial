// An example

let a = 2 + 2
switch (a) {
    case 3: console.log('Too small'); break
    case 4: console.log('Exactly!'); break
    case 5: console.log('Too large'); break
    default: console.log('I don\' know such values')
}

console.log()
let b = 2 + 2
switch (b) {
    case 3: console.log('Too small')
    case 4: console.log('Exactly!')
    case 5: console.log('Too large')
    default: console.log('I don\' know such values')
}

console.log()
let c = '1', d = 0
switch (+c) {
    case d + 1: console.log('This runs, because +c is 1, exactly equals d + 1'); break
    default: console.log('This doesn\'t run')
}

// Grouping of case

console.log()
let e = 3
switch (e) {
    case 4: console.log('Right!'); break
    case 3: case 5: console.log('Wrong!'); console.log('Why don\'t you take a math class'); break
    default: console.log('The result is strange. Really.')
}

// Type matters

console.log()
let arg = '3'
switch(arg) {
    case '0': case '1': console.log('One or zero'); break
    case '2': console.log('Two'); break
    case 3: console.log('Never executes!'); break
    default: console.log('An unknown value')
}