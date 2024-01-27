const { equal } = require('assert');

class Dog {
}

class Dog2 {
    setName(name){
        this.name = name;
    }
}

class Dog3 {
    static breed = "pug";
    static getName(){
        return "Laila";
    }
}
describe('Classes' , () => {
    it('#testClassName', () => { 
        equal("Dog", Dog.name);
    });

    it('#testInstanceVariablesSetByAssigning', () => { 
        const d = new Dog2();
        d.setName("Tony");
        equal("Tony", d.name);
    });

    it('#testStaticMemberVariablesAndMethods', () => { 
        equal("pug", Dog3.breed);
        equal("Laila", Dog3.getName());
    });

    it('#testIsStaticMemberVariablesAndMethodsAccessible', () => { 
        const d = new Dog3();
        equal(undefined, d.breed);
        equal(undefined, d.getName);
    });
});
