/* Two functions – one object

Is it possible to create functions A and B such as new A()==new B()?

function A() { ... }
function B() { ... }

let a = new A;
let b = new B;

alert( a == b ); // true

If it is, then provide an example of their code. */

let obj = {}
function A() { return obj }
function B() { return obj }

let a = new A
let b = new B

console.log(a == b) // true