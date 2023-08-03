//this is my final file when I get my routes and controllers set up

const express = require("express");
let app = express();
let PORT = 5001;
app.use(express.json());

/************************************/
//let my app know where the public stuff is (for homework)
app.use(express.static('public'));

//require the routes in the todoRoutes.js
const toDos = require("./routes/todoRoutes");

//use the toDos routes in your app
app.use(toDos);

app.listen(PORT, () => {
  console.log("Aplication is listening on port ", PORT);
});
