/** 
 * OBSERVER
 * is a object which have list of maintains object depending on it, 
 * automatically notifying the object about some changes
 * 
*/

class Observer {
    constructor() {
        this.subscribers = [];

        this._index = Symbol('index');
    }

    subscribe(subscriber) {
        subscriber[this._index] = this.getCount;
        
        this.subscribers.push(subscriber);
    }

    /**
     * 
     * @param {object} subscriber 
     */
    unsibscribe(subscriber) {
        this.subscribers.splice(subscriber[this._index], 1);
    }

    get getCount() {
        return this.subscribers.length;
    }

    /**
     * 
     * @param {object} subscriber 
     * 
     * @returns {number}
     */
    getIndex(subscriber) {
        return subscriber[this._index];
    }
}

class EventObjectObserver extends Observer {
    constructor() {
        super();

        this._update = Symbol('update');
    }

    /**
     * @param {object} obj
     * @param {function} func
     */
    add(obj, func) {
        obj[this._update] = func;
        this.subscribe(obj);
    }

    /**
     * 
     * @param {any} data 
     */
    notify(data) {
        const countSubscribers = this.getCount;

        for(let i = 0; i < countSubscribers; i++) {
            const subscriber = this.subscribers[i];

            subscriber[this._update](subscriber, data);
        }
    }
}

const consoleMessages = new EventObjectObserver();

const testObject = {
    name: 'andrew',
    lastName: 'tyndyk'
};

consoleMessages.add(testObject, (obj, data) => {
    console.log(data);
});

consoleMessages.add(testObject, (obj, data) => {
    console.log(data);
});

consoleMessages.notify('testMessage');
consoleMessages.notify('new test message');