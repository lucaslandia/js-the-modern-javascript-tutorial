/* What's wrong in the test?

What’s wrong in the test of pow below?

it("Raises x to the power n", function() {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result);

  result *= x;
  assert.equal(pow(x, 2), result);

  result *= x;
  assert.equal(pow(x, 3), result);
});

P.S. Syntactically the test is correct and passes. */

describe('pow', () => {
    function makeTest(number, power) {
        const expected = Array(power)
            .fill(number)
            .reduce((accumulator, currentValue) => accumulator * currentValue)
        
            it(`Raises ${number} to power ${power}`, () => 
            assert.equal(pow(number, power), expected))
    }

    const number = 5
    for (let i = 1; i <= 3; i++) makeTest(number, i)
})