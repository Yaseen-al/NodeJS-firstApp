// since module is a class now 'EventEmitter' is a class as well 
const EventEmitter = require('events');

//Now initializing an object 
const emitter = new EventEmitter();

const loggingEventName = 'messageLogged';
const requestEventName = 'userRequest';

//To register an event 
// function emitterEventCallBack(eventArg) {
//     console.log('Your message is logged');
//     console.log(eventArg.id)
//     console.log(eventArg.url)
// }


// emitter.on(loggingEventName, emitterEventCallBack)

// //using arrow function 
// emitter.on(requestEventName, (eventArg) => {
//     console.log('user requested to drink a; tea');
//     console.log(`request id: ${eventArg.id}, requestName: ${eventArg.requestName}`);
// })

// //To raise an event 
// emitter.emit(loggingEventName, {id: 1, url: 'http://'});
// emitter.emit(requestEventName, {id: 12521, requestName: 'greenTea'})


const Logger = require('./logger');

const logger = new Logger();
logger.on(loggingEventName, (eventAr) => {
    console.log('listner is called')
})

logger.log('This is a message ')
