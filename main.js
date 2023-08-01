//check
// console.log("loading main.js")

//brings in all the functions we need from the express module
const express = require("express");

//create an application object that uses express
let app = express();

// define a port we'll communicate through
//port in all caps
let PORT = 5001;

//for testing, our domain name is http://localhost:5001

//for any request where the route is "/hello"
//send a string as the response

app.get("/hello", (req, res) => {
  res.send("Hi there from the hello route");
});


//write a GET request c a route that will let me send a message by a name
//route /hello/Annie <- this is a request parameter

//in express start with a colon
app.get("/hello/:name", (req, res) => {
  let value = req.params.name;
  let message = `Hello ${value}`;

  res.send(message);
});

//write a GET route definition that uses a query parameter

//request url contains /bye?name=Jill       --> "see you later Jill"
//request url contains /bye?name=Robert --> "see you later Robert"
//request url contains is just /bye               --> "see you later"

//HINT: you get the query parameter using: req.query.name

//app.get(route, callback)
//get a value for the query parameter
//if there is a value, display appropriate message
//if not, display another message

app.get('/bye', (req, res) => {
    //query means after ?
    const name = req.query.name

    if (name) {
        res.send(`see you later, ${name}`)
    } else {
        res.send('see you later')
    }
});



app.listen(PORT, () => {
    console.log(`application is listening on port `, PORT);
  });