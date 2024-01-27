const { equal } = require('assert');

const GLOBAL = "I am global";
const AGE = 4;
class Person{
    getAge(){
        return AGE;
    }
}

class Teacher extends Person{
    
    constructor(){
        super();
        this.AGE = 10;
    }

    getAge(){
        return AGE;
    }
}

describe('Constants' , () => {
    const GLOBAL = "I am nested global";
    var ANOTHER_GLOBAL = "I am another global";
    it('#testNestedConstants', () => { 
        equal("I am nested global", GLOBAL);
    });

    it('#testGlobalConstantsEnclosingInClasses', () => { 
        equal(4, new Person().getAge());
    });

    it('#testConstantsUsingInheritance', () => { 
        equal(4, new Teacher().getAge());
    });

    it('#testConstantsInitialization', () => { 
        try {
            GLOBAL = 10; // Throws error "Assignment to constant variable."
        } catch (error) {
            equal("Assignment to constant variable.", error.message);
        }

        ANOTHER_GLOBAL = 10;
        equal(10 ,ANOTHER_GLOBAL);
    });

    it('#testConstantsScope', () => { 
        let GLOBAL = 10;
        equal( 10,GLOBAL);
    });
});
