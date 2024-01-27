
const { equal } = require('assert');

describe('RegularExpression' , () => {
    
    it('#testCreateRegEx', () => {
        const re = new RegExp('ab+c', 'i')
        equal('object', typeof re);
    });

    it('#testARegexpCanSearchAStringForMatchingContent', () => {
        const s = 'Please yes make my day!'
        equal('yes make my day', s.match(/yes.*day/));
    });

    it('#testARegexpCanSearchAStringForMatchingContent', () => {
        const re = /(\w+)\s(\w+)/
        const str = 'John Smith'
        const newstr = str.replace(re, '$2, $1')
        equal('Smith, John', newstr)
    });
});
