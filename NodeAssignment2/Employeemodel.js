
var http = require("http");
var fs = require("fs");
var qs = require("querystring");
var netpaybl = require("./netpaybl.js")

var EmpID , EmpName ,Basicpay ,objString ;

var MongoClient = require("mongodb").MongoClient;

        

http.createServer(function(req,res){

    console.log(req.method);
    if(req.method == "GET"){
       // res.writeHead(200,{"Content-type" : "text/plain"}); //// reads it as a plain text and displays the .html 
        res.writeHead(200,{"Content-type" : "text/html"});

    fs.createReadStream("./form.html", "UTF-8").pipe(res);
} 
else if(req.method == "POST"){
    var body = "";
    req.on("data", function(chunk){
        body += chunk;
        console.log("data")
    });

    req.on("end" , function(){
        var obj = qs.parse(body);
        EmpID = obj.empID;
        EmpName = obj.name;
        Basicpay = parseFloat(obj.basicpay);

        var x = netpaybl.calculateGrosspay(Basicpay);
        objString= JSON.stringify(x);
            console.log(objString);
        res.end( `<!DocTYPE html>
            <html>
            <head>
            <title>Get converted value</title>
            </head>
            <body> 
            <form action="/" method="POST">
            <label>EMP ID </label>
            <input type="text" id="empID" value = ${EmpID} name="empID" required/>
     
            <label>Name</label>
            <input type="text" id="name" value = ${EmpName} name="name" required />
     
            <label>Basic Pay</label>
            <input type="text" id="basicpay" value = ${Basicpay} name="basicpay" required/>
         
            <label> Net Pay</label>
            <input type="text" id="netpay" name= "netpay" value= ${objString} readonly />

            </form>
            </body> 
            </html>
        `);;

        
MongoClient.connect('mongodb://127.0.0.1:27017/Employee' , function(err,db){
    if(err){
        console.log(err);
    }

    console.log(Basicpay);
   
    db.collection('Empdata').insert({"EmpID":EmpID, "Name": EmpName, "BasicPay" : Basicpay, "NetPay" : objString});

    db.close();
});

    })
}
}).listen(3000);

console.log("Server listening on port 3000");