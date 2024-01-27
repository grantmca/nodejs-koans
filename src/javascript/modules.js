
const { equal } = require('assert');

const { FOO, fooBarMethod, BAR } = require('./foo');

describe('Modules' , () => {
    it('#testModuleVariable', () => {
        equal("I am Foo!", FOO);
    });

    it('#testModuleMethod', () => {
        equal("I am Bar!", fooBarMethod());
    });

    it('#testAccessingModule', () => {
        equal(undefined, BAR); 
    });
});
