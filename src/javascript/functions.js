const { equal } = require('assert');

function globalMethod(a, b){
    return a + b;
}

function getScore(a, b) {
  
    function add() {
      return (a + b);
    }
  
    return add();
}

function globalDefaultArguments(a, b = 20) {
    return a + b;
}

var pet = function(name) {   // The outer function defines a variable called "name"
    var getName = function() {
      return name;             // The inner function has access to the "name" variable of the outer
                               //function
    }
    return getName;            // Return the inner function, thereby exposing it to outer scopes
}

function multiply(multiplier, ...theArgs) {
    return theArgs.map(x => multiplier * x);
}

class Person{
    constructor(age){
        this.age = age;
    }

    getAge(){
        return this.age += 10;
    }
}

describe('Functions' , () => {
    it('#testCallingGlobalMethods', () => { 
        equal(30, globalMethod(10, 20));
    });

    it('#testCallingGlobalMethodsWithWrongNumberOfArguments', () => {
        equal(false, isNaN(globalMethod(10,20, 30)));
    });


    it('#testCallingGlobalMethodsWithWrongNumberOfArguments', () => {
        equal(true, isNaN(globalMethod(10)));
    });

    it('#testCallingNestedFunction', () => {
        equal(30, getScore(10,20));
    });

    it('#testCallingDefaultArguments', () => {
        equal(60, globalDefaultArguments(40));
    });

    it('#testCallingClosure', () => {
        const myPet = pet('Tony');
        equal('Tony', myPet());
    });

    it('#testCallingRestParameters', () => {
        // equal([ 2, 4, 6 ], multiply(2, 1, 2, 3));
    });

    it('#testCallingClassMethod', () => {
        equal(20, new Person(10).getAge());
    });
});
