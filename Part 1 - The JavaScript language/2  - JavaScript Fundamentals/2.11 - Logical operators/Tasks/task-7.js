/* Check the range outside

Write an if condition to check that age is NOT between 14 and 90 inclusively.

Create two variants: the first one using NOT !, the second one – without it. */

const age =35
console.log(!(age >= 14 && age <= 90))
console.log(age < 14 || age > 90)