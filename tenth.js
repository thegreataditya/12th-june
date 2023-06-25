var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('Thanks for subscribing to Collage Wallah!');
}

//Assign the event handler to an event:
eventEmitter.on('subscribe', myEventHandler);

//Fire the 'subscribe' event:
console.log('The default maximum number of event listeners is: ', eventEmitter.getMaxListeners());

eventEmitter.setMaxListeners(5);

console.log('The updated maximum number of event listeners is: ', eventEmitter.getMaxListeners());