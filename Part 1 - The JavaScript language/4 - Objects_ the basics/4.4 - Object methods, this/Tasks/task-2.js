/* Create a calculator

Create an object calculator with three methods:

read() prompts for two values and saves them as object properties.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.
let calculator = {
  // ... your code ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() ); */

const calculator = {
  read: function (a, b) { this.a = a; this.b = b },
  sum: function () { return this.a + this.b },
  mul: function  () { return this.a * this.b }
}

calculator.read(2, 6)
console.log(calculator.sum())
console.log(calculator.mul())