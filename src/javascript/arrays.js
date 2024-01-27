
const { equal, deepEqual } = require('assert');

describe('Arrays' , () => {
    it('#testCreatingArrays', () => {
        const anyValue = [];
        equal('object', typeof anyValue);
        equal(0, anyValue.length);
    });

    it('#testArrayLiterals', () => {
        const anyValue = [];
        equal('object', typeof anyValue);

        anyValue[0] = 1;
        equal(1, anyValue.length);
        
        anyValue[1] = 2;
        deepEqual([1, 2], anyValue);
    });

    it('#testAccessingArrayElements', () => {
        const array = ['peanut', 'butter', 'and', 'jelly'];

        equal('peanut', array[0]);
        equal(4, array.length);
        equal('and', array[2]);
    });

    it('#testAccessingArrayElements', () => {
        const array = ['peanut', 'butter', 'and', 'jelly'];
        
        deepEqual(['peanut'], array.slice(0, 1));
        deepEqual(['peanut', 'butter'], array.slice(0, 2));
        deepEqual([], array.slice(2, 2));
        deepEqual(['butter', 'and', 'jelly'], array.slice(1, 10));
        deepEqual([], array.slice(10, 1));
        deepEqual(['and', 'jelly'], array.slice(-2));
    });

    it('#testShiftingArrays', () => {
        const array = ['peanut', 'butter', 'and', 'jelly'];
    
        equal('peanut', array.shift());
        equal(3, array.length);
        equal('butter', array.shift());
        
        array.unshift('nut');
        equal(3, array.length);
        deepEqual(['nut', 'and', 'jelly'], array);
    });

    it('#testPushingAndPoppingArrays', () => {
        const array = ['peanut', 'butter', 'and', 'jelly'];
    
        array.push('nut');
        equal(5, array.length);
        deepEqual(['peanut', 'butter', 'and', 'jelly', 'nut'], array);
        equal('nut', array.pop());
        deepEqual(['peanut', 'butter', 'and', 'jelly'], array);
    });
        
});
