const { equal } = require('assert');

describe('ControlStatements' , () => {
    it('#testIfThenElseStatements', () => { 
        let result;
        if(true){
            result = true
        }else{
            result = false;
        }
        equal(true, result);
    });

    it('#testIfThenStatements', () => {
        let result = true;
        if(true){
            result = false;
        }
        equal(false, result);
    });


    it('#testIfStatementsReturnValues', () => {
        const someVal = () => {
            if(true){
                return true;
            }
            return false;
        }
        equal(true, someVal());
        
        const newVal = () => {
            if(false){
                return true;
            }
            return false;
        }
        equal(false, newVal());
    });

    it('#testDefaultReturnValue', () => {
        const someVal = () => {
            if(false){
                return true;
            }
        }
        equal(undefined, someVal());
    });

    it('#testConditionalOperators', () => {
        let someVal = true;
        equal(true, someVal ? true : false);

        let newVal = false;
        equal(false, newVal ? true : false);
    });

    it('#testWhileStatement', () => {
        let i = 1;
        let result = 1;
        while( i <= 5){
            result = result * i;
            i++;
        }
        equal(120, result);
    });

    it('#testBreakStatement', () => {
        let i = 1;
        let result = 1;
        while( i <= 10){
            result = result * i;
            i++;
            if( i === 5 )
                break;
        }
        equal(24, result);
    });

    it('#testContinueStatement', () => {
        let i = 1;
        let result = 1;
        while( i <= 5){
            result = result * i;
            i++;
            if( i == 3 )
                continue;
        }
        equal(120, result);
    });

    it('#testForStatement', () => {
        let result = 1;
        for(let i = 1; i <= 5; i++){
            result = result * i;
        }
        equal(120, result);
    });

    it('#testForInStatement', () => {
        const numbers = [1, 2, 3, 4, 5];

        let result = 0;
        for (let x in numbers) {
            result += numbers[x];
        }
        equal(15, result);
    });
});
