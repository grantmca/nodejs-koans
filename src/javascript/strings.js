
const { equal, deepEqual } = require('assert');

describe('Strings' , () => {

    it('#testCreatePrimitiveStringObject', () => {
        const anyValue = new String("Hello World");
        equal(true, typeof anyValue === 'object');
    });

    it('#testDoubleQuotedStringsAreStrings', () => {
        const anyValue = "Hello World";
        equal(true, typeof anyValue === 'string');
    });

    it('#testSingleQuotedStringsAreAlsoStrings', () => {
        const anyValue = 'Hello World';
        equal(true, typeof anyValue === 'string');
    });

    it('#testUseSingleQuotesToCreateStringWithDoubleQuotes', () => {
        const anyValue = 'He said, "Go Away."';
        equal('He said, "Go Away."', anyValue);
    });

    it('#testUseDoubleQuotesToCreateStringsWithSingleQuotes', () => {
        const anyValue = "Don't";
        equal("Don't", anyValue);
    });

    it('#testUseBackslashForThoseHardCases', () => {
        const a = "He said, \"Don't\"";
        const b = 'He said, "Don\'t"'
        equal(true, a === b)
    });

    it('#testPlusWillConcatenateTwoStrings', () => {
        const string = "Hello, " + "World";
        equal("Hello, World", string)
    });
        
    it('#testPlusConcatenationWillLeaveTheOriginalStringsUnmodified', () => {
        const hi = "Hello, ";
        const there = "World"
        const string = hi + there; 
        equal("Hello, ", hi);
        equal("World", there);
    });

    it('#testLongString', () => {
        const longString = "This is a very long string which needs \
                            to wrap across multiple lines because \
                            otherwise my code is unreadable."
        equal(1, longString.split("\n").length);
    });

    // EXCERSIE
    // How string interpolation is done in JavaScript?
    // What is backtick used for in strings?

    it('#testStringsCanBeJoined', () => {
        const words = ["Now", "is", "the", "time"]
        equal("Now is the time", words.join(" "));
    });

    it('#testStringsCanBeSplitWithDifferentPatterns', () => {
        const string = "the:rain:in:spain"
        const words = string.split(/:/)
        deepEqual(['the', 'rain', 'in', 'spain'], words);
    });
});
