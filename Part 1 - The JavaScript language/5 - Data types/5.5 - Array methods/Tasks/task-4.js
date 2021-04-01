/* Sort in decreasing order

let arr = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order

alert( arr ); // 8, 5, 2, 1, -10 */

let arr = [5, 2, 1, -10, 8]
arr.sort((a, b) =>
    a < b
        ? 1
        : b < a
            ? -1
            : 0
)
console.log(arr)

let arr1 = [5, 2, 1, -10, 8]
arr1.sort((a, b) => b - a)
console.log(arr1)