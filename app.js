const logger = require('./logger');

function sayHello(name) {
	console.log('Hello ' + name);
}

console.log(module);
sayHello('Yaseen');
logger.logMessage('Hellow from your logger!');


