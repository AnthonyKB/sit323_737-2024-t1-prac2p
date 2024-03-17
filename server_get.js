const express= require("express"); //Creating an express application which is necessary for building an express java webpage
    const app= express(); //Declaring a new variable 'app'
    const addTwoNumber= (n1,n2) => {
        return n1+n2; //works in conjunction with the code below to make the web page functional
    }
    app.get("/addTwoNumber", (req,res)=>{
        const n1= parseInt(req.query.n1); //parsing n1 data
        const n2=parseInt(req.query.n2); //parsing n2 data
        const result = addTwoNumber(n1,n2); //declaring 'addTwoNumber' which will show the n1 and n2
        res.json({statuscocde:200, data: result }); //This displays the status code as well as the result of n1 + n2
    });

    app.get("/", (req, res) => {
        const n1 = "<html><body><H1>HELLO THERE </H1></body></html>"; //This will be the content that is displayed on the webpage
        res.set('Content-Type', 'text/html'); //This declares what type of coding language and content type this is
        res.send(Buffer.from(n1)); //This will send the HTTP response with its body parameter being the buffer data
    })
    console.log (addTwoNumber(19,12));
    const port=3040; //This is the port that will be used to run the webpage on
    app.listen(port,()=> {
        console.log("hello i'm listening to port "+port); //App will listen to the the console log and port + display it in the terminal
    })
    