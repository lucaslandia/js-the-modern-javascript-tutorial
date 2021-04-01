// Two ways of thinking

console.log(pow(2, 2)) // 4
console.log(pow(2, 3)) // 8
console.log(pow(2, 4)) // 16

function pow(x, n) {
    let result = 1

    for (let i = 0; i < n; i++)
        result *= x

    return result
}

function pow(x, n) {
    if (n == 1)
        return x
    else
        return x * pow(x, n - 1)
}

function pow(x, n) {
    return (n == 1) ? x : (x * pow(x, n - 1))
}

// The execution context and stack

/* The execution context is an internal data structure that contains details about the execution of
a function: where the control flow is now, the current variables, the value of this (we don’t use it
here) and few other internal details. */

/* When a function makes a nested call, the following happens:

- The current function is paused.
- The execution context associated with it is remembered in a special data structure called execution
context stack.
- The nested call executes.
- After it ends, the old execution context is retrieved from the stack, and the outer function is
resumed from where it stopped. */

// Recursive traversals

console.log()

let company = {
    sales: [{
        name: 'John',
        salary: 1000
    }, {
        name: 'Alice',
        salary: 1600
    }],
    development: {
        sites: [{
            name: 'Peter',
            salary: 2000
        }, {
            name: 'Alex',
            salary: 1800
        }],
        internals: [{
            name: 'Jack',
            salary: 1300
        }]
    }
}

function sumSalaries(department) {
    if (Array.isArray(department)) {
        return department.reduce((prev, current) => prev + current.salary, 0)
    } else {
        let sum = 0
        for (let subdep of Object.values(department))
            sum += sumSalaries(subdep)
        return sum
    }
}

console.log(sumSalaries(company)) // 7700

// Recursive structures

/// Linked list

console.log()

function logLinkedList(list) {
    let head = list
    while (head) {
        console.log(head.value)
        head = head.next
    }
}

const list = { value: 1 }
list.next = { value: 2 }
list.next.next = { value: 3 }
list.next.next.next = { value: 4 }
list.next.next.next.next = null
logLinkedList(list)

console.log()
const prependList = { value: 'new item', next: list }
logLinkedList(prependList)

console.log()
const middleRemoveList = prependList
middleRemoveList.next = middleRemoveList.next.next
logLinkedList(middleRemoveList)