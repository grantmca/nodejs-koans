
const { equal, match } = require('assert');

describe('Inheritance' , () => {

    class Dog {
        constructor(name){
            this.name = name;
        }
    
        bark() {
            return "WOOF";
        }
    }
    
    class Chihuahua extends Dog {
        constructor(name){
            super(name);
        }
    
        wag() {
            return "HAPPY";
        }
    
        bark() {
            return "WIG";
        }
    }
    
    it('#testDerivedClassHaveTheBaseAsAnAncestor', () => {
        equal(true, Chihuahua.prototype instanceof Dog);
    });

    it('#testAllClassesUltimatelyInheritFromObject', () => {
        equal(true, Chihuahua.prototype instanceof Object);
    });

    it('#testDerivedClassesInheritBehaviorFromBaseClass', () => {
        const chico = new Chihuahua("Chico");
        equal("Chico", chico.name);
    });

    it('#testDerivedClassesInheritBehaviorFromBaseClass', () => {
        const chico = new Chihuahua("Chico");
        equal("HAPPY", chico.wag());

        try {
            const laila = new Dog("Laila");
            laila.wag();    
        } catch (error) {
            console.log(error.toString())
            match(error.toString(), /laila.wag is not a function/)
        }
    });

    it('#testDerivedClassesCanModifyExistingBehavior', () => {
        const chico = new Chihuahua("Chico");
        equal("WIG", chico.bark());
        
        const laila = new Dog("Laila");
        equal("WOOF", laila.bark())
    });

    // ------------------------------------------------------------

    class BullDog extends Dog {
        constructor(name){
            super(name);
        }

        bark() {
            return `${this.name}, GROWL`;
        }
    }

    it('#testDerivedClassesCanInvokeBaseBehaviorViaSuper', () => {
        const ralph = new BullDog("Ralph");
        equal("Ralph, GROWL", ralph.bark());
    });
    
    // ------------------------------------------------------------
    
    class GreatDane extends Dog {
        constructor(name) {
            super(name);
        }

        growl() {
            return `${this.bark()}, GROWL`;
        }
    }

    it('#testDerivedClassesCanInvokeBaseMethodViaSuper', () => {
        const tom = new GreatDane("Tom");
        equal("WOOF, GROWL", tom.growl());
    });
});
