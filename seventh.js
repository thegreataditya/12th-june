const http = require("http")

http.createServer(function (request, response) {
    if (request) {
        response.write("<h1>I am happy to learn Full Stack Web Developement from PW Skills!</h1>"); //write a response to the client
        response.end(); //end the response   
    }

}).listen(8005);