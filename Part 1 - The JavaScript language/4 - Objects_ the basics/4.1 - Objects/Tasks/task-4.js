/* Multiply numeric properties by 2

Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.

For instance:

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};

Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

P.S. Use typeof to check for a number here. */


let menu = {
    width: 200,
    height: 300,
    title: "My menu"
}

multiplyNumeric(menu)
console.log(menu)

function multiplyNumeric(obj) {
    for (const key in obj)
        if (typeof obj[key] === 'number')
            obj[key] *= 2
}



