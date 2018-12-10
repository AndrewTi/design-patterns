/**
 * MEDIATOR
 * Provide a connection between different objects and can send a data directly to one or to all objects
 */

 class Mediator {
     constructor() {
         this.objects = [];
     }


     /**
      * 
      * @param {obj} obj 
      */
     register(obj) {
         this.objects.push(obj);
         obj.mediator = this;
     }

     /**
      * 
      * @param {string} text 
      * @param {object} from 
      * @param {object} to 
      */
     send(text, from, to) {
        if(!to)
            this.objects.map(function(obj) {
                obj.recieve(text, from)
            })
        else 
            to.recieve(text, from)
     }
}

class Controller {
    /**
     * 
     * @param {string} name 
     */
    constructor(name) {
        this.name = name;
        this.mediator = null;
    }

    /**
     * 
     * @param {string} text 
     * @param {object} to 
     */
    send(text, to = null) {
        this.mediator.send(text, this, to);
    }

    /**
     * 
     * @param {string} text 
     * @param {object} from 
     */
    recieve(text, from) {
        console.log(text, from.name);
    }
}

const mediator = new Mediator();

const Login = new Controller('Login');
const Register = new Controller('Register');
const MainPage = new Controller('MainPage');

mediator.register(Login);
mediator.register(Register);
mediator.register(MainPage);

Login.send('text message');
