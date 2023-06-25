var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('Thanks for subscribing to Collage Wallah!');
}

//Assign the event handler to an event:
eventEmitter.on('subscribe', myEventHandler);

//Fire the 'subscribe' event:
eventEmitter.emit('subscribe', 'Collage Wallah');