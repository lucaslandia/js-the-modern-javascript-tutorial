/* Output a single-linked list in the reverse order

Output a single-linked list from the previous task Output a single-linked list in the reverse order.

Make two solutions: using a loop and using a recursion. */

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
}

printList(list)

// Loop
function printList(list) {
    const values = []

    while (list) {
        values.push(list.value)
        list = list.next
    }

    values.reduceRight((_, currentValue) => {
        console.log(currentValue)
    },
        null)
}

// Recursion
function printList(list) {
    if (list.next)
        printList(list.next)
    console.log(list.value)
}