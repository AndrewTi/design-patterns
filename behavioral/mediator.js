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
            this.objects.map(function(obj) {
                obj.recieve(text, from)
            })
        else 
            to.recieve(text, from)
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
