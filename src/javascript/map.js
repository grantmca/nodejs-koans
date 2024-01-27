
const { equal } = require('assert');
describe('Map' , () => {
    it('#testCreatingMap', () => {
        const map = new Map();
        equal(true, typeof map === 'object');
        equal(0, map.size);
    });

    it('#testAccessingMap', () => {
        const map = new Map();

        map.set('Jessie', {phone: "213-555-1234", address: "123 N 1st Ave"})

        equal(true, map.has('Jessie'));
        equal(undefined, map.get('Hilary'));
        map.set('Hilary', {phone: "617-555-4321", address: "321 S 2nd St"})

        equal(false, map.delete('Raymond'));
        equal(true, map.delete('Jessie'));
        equal(1, map.size)
    });


    it('#testCombiningHashes', () => {
        const first = new Map([
            [1, 'one'],
            [2, 'two'],
            [3, 'three'],
        ]);

        const second = new Map([
            [1, 'uno'],
            [2, 'dos']
        ]);

        const merged = new Map([...first, ...second])
          
        equal('uno', merged.get(1))
        equal('dos', merged.get(2))
        equal('three', merged.get(3))
    });

    it('#testClearingHash', () => {
        const first = new Map([
            [1, 'one'],
            [2, 'two'],
            [3, 'three'],
        ]);
          
        equal(3, first.size);

        first.clear();
        equal(0, first.size)
    });
   
});
