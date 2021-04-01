/* Shuffle an array

Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

Multiple runs of shuffle may lead to different orders of elements. For instance:

let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...

All element orders should have an equal probability. For instance, [1,2,3] can be reordered as
[1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case. */

let arr = [1, 2, 3]
shuffle(arr)
console.log(arr)
shuffle(arr)
console.log(arr)
shuffle(arr)
console.log(arr)

function shuffle(arr) {
    const clone = arr.slice()
    arr.length = 0

    while (clone.length) {
        const random = Math.floor(Math.random() * clone.length)
        arr.push(clone.splice(random, 1)[0])
    }
}

function shuffle(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
}

let count = {
    123: 0,
    132: 0,
    213: 0,
    231: 0,
    312: 0,
    321: 0,
}

for (let i = 0; i < 1000000; i++) {
    let arr = [1, 2, 3]
    shuffle(arr)
    count[arr.join('')]++
}

console.log()
for (const key in count)
    console.log(`${key}: ${count[key]}`)