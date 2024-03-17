var express = require("express") //Creating an express application which is necessary for building an express java webpage
var app = express() //Declaring a new variable 'app'
var port = process.env.port || 3000; //Setting up the port
app.listen(port,()=>{ 
console.log("App listening to: "+port) //App will listen to the the console log and port + display it in the terminal
})