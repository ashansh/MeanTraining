const express = require("express");
const app = express();

app.get("/",function(req,res){
    res.write("Calculate area of rectangle by passing l & b in url");
    res.end();
})

app.get("/rectarea/:length/:bredth",function(req,res){

    console.log(req.params.length);
    console.log(req.params.bredth);

    var l = parseFloat(req.params.length);
    var b = parseFloat(req.params.bredth);

    console.log("Area of rectangle is " +(l*b));

    res.end("Area of rectangle is " +(l*b));
}).listen(3000)

console.log("server hosted at port 3000");