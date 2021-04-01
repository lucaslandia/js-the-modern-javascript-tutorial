let firstName = null
let lastName = undefined
let nickName = 'SuperCoder'

console.log(firstName ?? lastName ?? nickName ?? 'Anonymous') // SuperCoder

// Comparison with ||

console.log()
let height = 0
console.log(height || 100) // 100
console.log(height ?? 100) // 0

// Precedence

console.log()
let height1 = null
let width1 = null
let area = (height1 ?? 100) * (width1 ?? 50)
console.log(area) // 5000

// let x = 1 && 2 ?? 3 // Syntax error due to language limitation for avoiding mistakes.
let x = (1 && 2) ?? 3 // Works.
console.log(x) // 2
