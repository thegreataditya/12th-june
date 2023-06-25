var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var greeting = function () {
  console.log('Thanks for subscribing to Collage Wallah!');
}

//Assign the event handler to an event:
eventEmitter.on('subscribe', greeting);

//Fire the 'subscribe' event:
eventEmitter.emit('subscribe', 'Collage Wallah');

eventEmitter.removeListener('subscribe', greeting);

console.log("Listener Removed");

eventEmitter.emit('subscribe', 'Collage Wallah');