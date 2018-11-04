/**
 * SINGLETONE
 * Can exist only one instance of the object
 * In the event of an object already exist just have to return reference to that object (not create new)
 */


 // Basic example of singletone pattern;
 (() => {
    console.log('start basic singletone');
    let instance = null;

    class Singletone {
        constructor() {
            if(instance)
                return instance

            this.date = +new Date();
            return instance;
        }  
    }

    instance = new Singletone();
    console.log(instance);

    setTimeout(() => {
        instance = new Singletone();
        console.log(instance);

        console.log('end basic singletone');
    }, 100)
 })();