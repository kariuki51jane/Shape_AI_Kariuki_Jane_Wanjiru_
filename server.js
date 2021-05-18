const { response } = require("express");
const express= require("express");

const bodyParser = require("body-parser");

const app=express();
app.arguments(bodyParser.urlencoded({extended: true}))

/*app.get("/",function(req, res){
res.send("<h1>Hello World</h1>");
});*/

/*app.get("/about",function(req, res){
    res.send("<h1>Jane Wanjiru Kariuki</h1><p>This is preety hard  to understand</p>");
    });*/
 
    app.get("/",function(req, res){
        res.sendFile(__dirname+"/index.html");
        });


        app.post("/",function(req,res){
            var n1=Number(req.body.num1); 
            var n2=Number(req.body.num2); 
            console.log(req.body.num1);
            var result = n1+n2;
            res.send( n1+ " + " +n2+ " = "+result);
        });

app.listen(3000, function(){
    console.log("Server has started on port 3000")
});