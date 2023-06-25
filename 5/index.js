const fs = require('fs');

const content1 = "Node.js uses a Single Threaded Event Loop architecture to handle multiple concurrent clients. The Node.js processing model is based on a Javascript-event-based model and a callback mechanism. This mechanism based on the event loop allows Node.js to run blocking I/O operations in a non-blocking way ";

const content2 = "Node.js is easy to learn and quick to adapt, flexible, excellent for calling other services, increases performance and handles a lot of requests, great for real-time applications and helps in building cross-platform applications";

fs.writeFile('nodejs_architecture.txt', content1, (err) => {
  if (err) {
    console.error("Writing Error: ", err);
  }else{
    console.log("Written successfully!");
  }

});

fs.appendFile('nodejs_architecture.txt', content2, (err) => {
  if(err){
    console.log("Error Occured: ", err);
  }else{
    console.log("Appended Successfully!");
  }
})

fs.readFile('nodejs_architecture.txt', 'utf8', (err, result) => {
  if (err) {
    console.error("Reading Error", err);
    return;
  }else{
    console.log(result.toString());
    console.log("Read Successfull!");
  }
});

fs.unlink("nodejs_architecture.txt", (err) => {
  if (err) {
    console.log("Error in deleting file: ", err);
  }else{
    console.log("File Deleted SuccessFully");
  }
})
