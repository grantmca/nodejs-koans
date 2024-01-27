const { equal } = require('assert');

describe('Asserts' , () => {
    it('#testAssertTruth', () => {
        equal(true, true); // This should be true
    });

    it('#testAssertWithMessage', () => {
        equal('This should be true -- Please fix this', 'This should be true -- Please fix this');
    });

    it('#testAssertEquality', () => {
        expectedValue = 2
        actualValue = 1 + 1
        equal(actualValue, expectedValue);
    });

    it('#testABetterWayOfAssertingEquality', () => {
        equal(expectedValue, 1 + 1);
    });
});
