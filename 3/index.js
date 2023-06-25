const fs = require('fs');

const content = "Node.js uses a Single Threaded Event Loop architecture to handle multiple concurrent clients. The Node.js processing model is based on a Javascript-event-based model and a callback mechanism. This mechanism based on the event loop allows Node.js to run blocking I/O operations in a non-blocking way";

fs.writeFile('./nodejs_architecture.txt', content, err => {
  if (err) {
    console.error(err);
  }else{
    console.log("Written successfully");
  }
});

fs.readFile('./nodejs_architecture.txt', 'utf8', (err, content) => {
  if (err) {
    console.error(err);
    return;
  }else{
    console.log(content.toString());
  }
});
