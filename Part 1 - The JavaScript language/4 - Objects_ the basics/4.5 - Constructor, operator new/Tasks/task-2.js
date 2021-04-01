/* Create new Calculator

Create a constructor function Calculator that creates objects with 3 methods:

read() asks for two values using prompt and remembers them in object properties.
sum() returns the sum of these properties.
mul() returns the multiplication product of these properties.

For instance:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() ); */

let calculator = new Calculator()
calculator.read()
console.log('Sum= ' + calculator.sum())
console.log('Mul= ' + calculator.mul())

function Calculator() {
    this.read = function () { this.a = 2; this.b = 10 }
    this.sum = function () { return this.a + this.b }
    this.mul = function () { return this.a * this.b }
}