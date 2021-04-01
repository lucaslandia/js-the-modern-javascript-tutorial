/* Uppercase the first character

Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:

ucFirst("john") == "John"; */

console.log(ucFirst("john") == "John")

function ucFirst(str) {
    return str[0]?.toUpperCase() + str.substring(1)
}