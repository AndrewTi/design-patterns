/**
 * MEDIATOR
 * provide connection between different classes
 */

 class Mediator {
     constructor() {
         this.objects = [];
     }

     register(obj) {
         this.objects.push(obj);
         obj.mediator = this;
     }

     send(text, from, to) {
         if(!to)
            this.objects.
         console.log(text, from.name, to.name);
     }

     recieve(text, from) {
         console.log(text, from);
     }
}

class Controller {
    constructor(name) {
        this.name = name;
        this.mediator = null;
    }

    send(text, to = null) {
        this.mediator.send(text, this, to);
    }
}

const mediator = new Mediator();

const Login = new Controller('Login');
const Register = new Controller('Register');
const MainPage = new Controller('MainPage');

mediator.register(Login);
mediator.register(Register);
mediator.register(MainPage);

Login.send('text message', Register);
