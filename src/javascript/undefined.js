const { equal, match } = require('assert');

describe('Undefined' , () => {
    it('#testUndefined', () => {
        const anyValue = undefined;
        equal('undefined', typeof anyValue); // This should be true
    });

    // it('#testYouGetErrorsWhenCallingMethodsOnUndefined', () => {
    //     try {
    //         const someVal = undefined;
    //         someVal.method();
    //     } catch (error) {
    //         match(error.message, error.message);
    //     }
    // });

    // THINK ABOUT IT:
    //
    // Is undefined check required?
    //    if( val === undefined )
    // or
    //    can we skip
    // Why?
});
