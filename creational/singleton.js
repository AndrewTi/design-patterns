/**
 * SINGLETONE
 * Can exist only one instance of the object
 * In the event of an object already exist just have to return reference to that object (not create new)
 */

let instance = null;

class Singletone {
    constructor() {
        if(!instance)
            this.instance = this;

        this.data = +new Date();
        return instance;
    }   
}

instance = new Singletone();
console.log(instance);

instance = new Singletone();
console.log(instance);
