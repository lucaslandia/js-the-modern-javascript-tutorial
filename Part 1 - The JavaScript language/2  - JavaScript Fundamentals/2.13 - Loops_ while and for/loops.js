// The "while" loop

let i = 0
while (i < 3) {
    console.log(i) // 0, 1, 2
    i++
}

console.log()
let j = 3
while (j) {
    console.log(j) // 3, 2, 1
    j--
}

console.log()
let k = 3
while (k) console.log(k--) // 3, 2, 1

// The "do... while loop"

console.log()
let l = 0
do {
    console.log(l) // 0, 1, 2
    l++
} while (l < 3)

// The "for" loop

console.log()
for (let i = 0; i < 3; i++) console.log(i) // 0, 1, 2

// Skipping parts

console.log()
let m = 0
for (; m < 3; m++) console.log(m) // 0, 1, 2

console.log()
let n = 0
for (; n < 3;) console.log(n++) // 0, 1, 2

// Breaking the loop

console.log()
let sum = 0
while (true) {
    console.log(sum++) // 0
    break
}

// Continue to the next iteration

console.log()
for (let i = 0; i < 10; i++) {
    if (i % 2) continue
    console.log(i) // 0, 2, 4, 6, 8
}

// Labels for break/continue

console.log()
outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`(${i}, ${j})`)
        break outer
    }
}
console.log('Done!')

