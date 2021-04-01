/* The maximal salary

There is a salaries object:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

Create the function topSalary(salaries) that returns the name of the top-paid person.

- If salaries is empty, it should return null.
- If there are multiple top-paid persons, return any of them.

P.S. Use Object.entries and destructuring to iterate over key/value pairs. */

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
}

function topSalary(salaries) {    
    let max = 0, maxName = null
    
    for (const [person, salary] of Object.entries(salaries))
        if (salary > max)
            [max, maxName] = [salary, person]
    
            return maxName
}

console.log(topSalary(salaries))