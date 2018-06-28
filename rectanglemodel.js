var http = require("http");

var rectanglebl = require("./rectanglebl.js")
var temperaturebl = require("./temperaturebl")

http.createServer(function(req,res){
    if(req.url === "/"){
        res.end("please choose where you want to head");
    }
    else if (req.url === "/area"){
        rectanglebl.area(res);
    }
    else if (req.url === "/perimeter"){
        rectanglebl.perimeter(res);
    }
    else if (req.url === "/toCelcius"){
        temperaturebl.toCelcius(res);
    }
    else if (req.url === "/toFaranite"){
        temperaturebl.toFaranite(res);
    }
    else {
        res.end("404 Not found");
    }
}).listen(3000);

console.log("Server listening on port 3000");

