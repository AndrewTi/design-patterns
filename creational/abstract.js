/** Abstract pattern
 * define a structure of class 
 */

class SomeAbstract {
    constructor() {
        if(this.constructor == SomeAbstract)
            throw new TypeError('bla bla you cannot bla bla');

        if(this.someMethod === undefined)
            throw new TypeError('someMethod is required');
    }
}

class TestClass extends SomeAbstract {
    constructor() {
        super();
    }

    someMethod() {
        // logic
    }
}

const a = new TestClass();