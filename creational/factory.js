/**
 * Factory pattern
 * Gives us a api to create a new objects
 * */ 

 class Junior {
     /**
      * 
      * @param {string} name 
      * @param {string} lastName 
      * @param {number} age 
      */
     constructor(name, lastName, age ) {
         this.name = name;
         this.lastName = lastName;
         this.age = age;
         this.type = this.constructor.name;
     }
}

class Middle {
    /**
     * 
     * @param {string} name 
     * @param {string} lastName 
     * @param {number} age 
     */
    constructor(name, lastName, age) {
         this.name = name;
         this.lastName = lastName;
         this.age = age;
         this.type = this.constructor.name;
    }
}

class Hight {
    /**
     * 
     * @param {string} name 
     * @param {string} lastName 
     * @param {number} age 
     */
    constructor(name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.type = this.constructor.name;
   }
}

 class FactoryStudents {
     /**
      * 
      * @param {string} type 
      * @param {object} options 
      */
    create(type, options) {
        const { name, lastName, age } = options;

        switch(type) {
            case 'junior': 
                return new Junior(name, lastName, age);
            case 'middle':
                return new Middle();
        }
    }
 }

const school1 = new FactoryStudents();

const student1 = school1.create('junior', { name: 'test', lastName: 'test', age: 12 });
console.log(student1);