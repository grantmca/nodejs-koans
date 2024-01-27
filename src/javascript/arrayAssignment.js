
const { equal, deepEqual } = require('assert');

describe('ArrayAssignment' , () => {
    it('#testArrays', () => {
        const array = ["John", "Smith"];
        deepEqual(["John", "Smith"], array);
    });

    it('#testSpreadingArrays', () => {
        const array = ["John", "Smith"];
        const newValue = "Doe";
        deepEqual(["John", "Smith", "Doe"], [...array, newValue]);
    });
    
    it('#testSortArrays', () => {
        const array = ["John", "Smith", "Doe", "Arnold"];
        array.sort()
        deepEqual(["Arnold", "Doe", "John", "Smith"], array);
    });
   
    it('#testIncludesArrays', () => {
        const array = ["John", "Smith", "Doe", "Arnold"];
        equal(true, array.includes('Arnold'));
        equal(false, array.includes('Mary'));
    });
   
    it('#testReverseArrays', () => {
        const array = ["John", "Smith", "Doe", "Arnold"];
        array.reverse();
        deepEqual(["Arnold", "Doe", "Smith", "John"], array); 
    });
   
});
