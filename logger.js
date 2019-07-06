const EventEmitter = require('events');

const loggingEventName = 'messageLogged'
class Logger extends EventEmitter {
//when a function is inside a class now it becomes a method and you don't need the keyword `function`
    log(message){
    //send an Http request
    console.log(message)
    this.emit(loggingEventName, {id: 1, url: 'http://'});
    }
}

let url = 'http://mylogger.io/log'


//this will export a certain function in this case is `log` to be used as a public function.
// if this module is imported somewhere else notice that we can export it in our desired naming which
// in this case is `logMessage` 
module.exports = Logger;

console.log(module)