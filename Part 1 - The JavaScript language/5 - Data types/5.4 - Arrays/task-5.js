/* A maximal subarray

The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

The task is: find the contiguous subarray of arr with the maximal sum of items.

Write the function getMaxSubSum(arr) that will return that sum.

For instance:

getMaxSubSum([-1, 2, 3, -9]) == 5 (the sum of highlighted items)
getMaxSubSum([2, -1, 2, 3, -9]) == 6
getMaxSubSum([-1, 2, 3, -9, 11]) == 11
getMaxSubSum([-2, -1, 1, 2]) == 3
getMaxSubSum([100, -9, 2, -3, 5]) == 100
getMaxSubSum([1, 2, 3]) == 6 (take all)

If all items are negative, it means that we take none (the subarray is empty), so the sum is zero:

getMaxSubSum([-1, -2, -3]) = 0

Please try to think of a fast solution: O(n2) or even O(n) if you can. */

console.log(getMaxSubSum([-1, 2, 3, -9])) // 5
console.log(getMaxSubSum([2, -1, 2, 3, -9])) // 6
console.log(getMaxSubSum([-1, 2, 3, -9, 11])) // 11
console.log(getMaxSubSum([-2, -1, 1, 2])) // 3
console.log(getMaxSubSum([100, -9, 2, -3, 5])) // 100
console.log(getMaxSubSum([1, 2, 3])) // 6
console.log(getMaxSubSum([-1, -2, -3])) // 0
console.log(getMaxSubSum([-5, 100, -3, -5, -10, 50, -1])) // 132

function getMaxSubSum(arr) {
    let maxSum = sum = negSum = 0

    for (const num of arr) {
        if (num >= 0) {
            if (num + negSum >= 0)
                sum += num + negSum
            else
                sum = num

            negSum = 0

            if (sum > maxSum)
                maxSum = sum
        } else if (sum + num >= 0) {
            negSum += num
        } else {
            sum = 0
        }
    }

    return maxSum
}

function getMaxSubSum(arr) {
    let maxSum  = 0

    for (let i = 0; i < arr.length; i++) {
        let sumFixedStart = 0

        for (let j = i; j < arr.length; j++) {
            sumFixedStart += arr[j]
            maxSum = Math.max(maxSum, sumFixedStart)
        }
    }

    return maxSum
}

function getMaxSubSum(arr) {
    let maxSum = partialSum = 0

    for (const item of arr) {
        partialSum += item
        maxSum = Math.max(maxSum, partialSum)        
        if (partialSum < 0)
            partialSum = 0
    }

    return maxSum
}