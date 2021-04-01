// The "if" statement

year = 2002

if (year != 2015) {
    console.log('That\'s correct')
    console.log('You\'re so smart')
}

// Boolean conversion

/* A number 0, an empty string "", null, undefined, and NaN all become false. Because of that they are called “falsy” values.
Other values become true, so they are called “truthy”. */

console.log()
if (0) console.log('0 is falsy')
if (1) console.log('1 is truthy')

// The "else" clause

console.log()
if (NaN) console.log('true')
else console.log('false')

// Several conditions: "else if"

if (0) {
    console.log('if')
} else if (undefined) {
    console.log('First else if')
} else if (null) {
    console.log('Second else if')
} else {
    console.log('else')
}

// Conditional operator '?'

console.log()
const conditionalOperatorResult = undefined > 0 ? 'It is' : 'It isn\'t'
console.log(conditionalOperatorResult)

// Multiple '?'

console.log()
const multipleConditionalOperatorsResult = null === undefined ? 'Hi!' :
    null > 0 ? 'Hi there!' :
    NaN == true ? 'Hello' :
    'Hello again!'
console.log(multipleConditionalOperatorsResult)

// Non-traditional use of '?'

console.log()
true == 0 ?
    console.log('true') : console.log('false')