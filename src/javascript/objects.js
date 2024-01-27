
const { equal, match } = require('assert');
describe('Objects' , () => {
    it('#testObjectTypes', () => {
        const anyValue = {
            a: 1,
            b: 'string',
            c: 1.1
        };
        equal('object', typeof anyValue);
        equal('number', typeof anyValue.a);
        equal('string', typeof anyValue.b);
        equal('number', typeof anyValue.c);
    });

    it('#testObjectsCanBeConvertedToString', () => {
        const anyValue = {
            a: 1,
            b: 'string',
            c: 1.1
        };
        equal('1', anyValue.a.toString());
        equal('string', anyValue.b.toString());
        equal('1.1', anyValue.c.toString());
    });

    it('#testObjectsCanBeCompared', () => {
        const anyValue = {
            a: 1,
            b: 'string',
            c: 1.1
        };
        const cloneValue = anyValue
        equal(true, anyValue === cloneValue); 
    });
});
