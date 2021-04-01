describe('pow', function () {
    it('2 raised to power 3 is 8', function () {
        assert.equal(pow(2, 3), 8)
    })

    it('3 raised to power 4 is 81', function () {
        assert.equal(pow(3, 4), 81)
    })
})

describe('pow', function () {
    function makeTest(x) {
        let expected = x * x * x

        it(`${x} in the power 3 is ${expected}`, function () {
            assert.equal(pow(x, 3), expected)
        })
    }

    for (let i = 1; i <= 5; i++) makeTest(i)
})

describe('pow', function () {
    describe('raises x to power 3', function () {
        function makeTest(x) {
            let expected = x * x * x

            it(`${x} in the power 3 is ${expected}`, function () {
                assert.equal(pow(x, 3), expected)
            })
        }

        for (let i = 1; i <= 5; i++) makeTest(i)
    })
})

describe('test', () => {
    before(() => console.log('Testing started - before all tests'))
    after(() => console.log('Testing finished - after all tests'))

    beforeEach(() => console.log('Before a test - enter a test'))
    afterEach(() => console.log('After a test - exit a test'))

    it('test 1', () => console.log(1))
    it('test 2', () => console.log(2))
})

describe('pow', function () {
    describe('raises x to power 3', () => {
        function makeTest(x) {
            let expected = x * x * x

            it(`${x} in the power 3 is ${expected}`, function () {
                assert.equal(pow(x, 3), expected)
            })
        }

        for (let i = 1; i <= 5; i++) makeTest(i)
    })

    it('for negative n the result is NaN', () => {
        assert.isNaN(pow(2, -1))
    })

    it('for negative n the result is NaN', () => {
        assert.isNaN(pow(2, 1.5))
    })
})

describe("Raises x to power n", function () {
    it("5 in the power of 1 equals 5", function () {
        assert.equal(pow(5, 1), 5)
    })

    // Mocha will run only this block
    // it.only("5 in the power of 2 equals 25", function () {
    //     assert.equal(pow(5, 2), 25)
    // })

    it("5 in the power of 3 equals 125", function () {
        assert.equal(pow(5, 3), 125)
    })
})