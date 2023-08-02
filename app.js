//check
console.log("loading app.js");

//brings in all the function we need from express module
const express = require("express");

//create an application object that uses express
let app = express();

//define a port we'll communicate through
let PORT = 5001;

//make sure all data passing back and forth is in json format
//using middleware component
app.use(express.json());

/*********************************************/

//route that add a single todo to the list

/**
 * need an array var to hold my todo objects
 * read the description from the request body
 * and create a new todo with the description,
 * use a random number for the id
 * set the completed to false
 */

let db = []; //just for testing. we'd really use a database so the data is persistent

app.post("/todos", (req, res) => {
  let newItem = {};

  newItem.description = req.body.description;
  newItem.completed = false;
  newItem.id = randomInt(); //gotta build a function for this

  //send to database array
  db.push(newItem);

  res.json(newItem);
});

/*********************************************/

//route that returns all the todos in our list
app.get("/todos", (req, res) => {
  // console.log("GET /todos");

  //response to be json
  res.json(db);
});

/*********************************************/

//route that returns a single todo based on the id provided
/**
 * get the id of the todo we want from the route param
 * find that todo in our 'database' that matches the route id
 * bunch of ways:
 * loop (for or while)
 * HO find   HO === higher order
 * HO findIndex
 * HO filter
 * HO reduce
 * if we find it, return the todo
 * otherwise return message 'not found' or return null
 */

app.get("/todos/:id", (req, res) => {
  //get the id from the route
  let myId = req.params.id;

  //find that todo in our 'database' that matches the route id
  let matchingItem = db.find((item, index) => {
    return item.id == myId;
  });

  if (matchingItem) {
    res.json(matchingItem);
  } else {
    // res.send('ID not found')
    res.sendStatus(404);
  }
});

/*********************************************/

//route that will delete a single todo based on the id provided
app.delete("/todos/:id", (req, res) => {
  //get the id from the route
  let myId = req.params.id

  //find the matching id of the item in  the db
  let matchingIndex = db.findIndex((item, index) => {
    return item.id == myId;
  });

  //if it find it, remove it and return deleted item. otherwise send a 404
  if(matchingIndex) {
    let deletedItem = db.splice(matchingIndex, 1)
    res.json(deletedItem)
  } else {
    res.sendStatus(404)
  }
})

/*********************************************/

//route that updates an existing todo based on the id provided

/**
 * get the param id from the route
 * var that holds the description from the body that I'm sending/updating
 * var that holds the completed from the body that I'm sending/updating
 * let completed - req.body.completed
 * find the item that matches the id (find should work, or findIndex)
 * 
 * if we find the matching item, matchingItem.completed = completed
 * otherwise send invalid id msg ex. 404
 */

app.put("/todos/id:", (req, res) => {
  let myId = req.params.id
  let description = req.body.description //optional
  let completed= req.body.completed === true

  let matchingItem = db.find((item, index) => {
    return item.id == myId
  })

  if(matchingItem){
    matchingItem.description = description
    matchingItem.completed = completed
    res.json(matchingItem)
  } else {
    res.send('Invalid Id')
  }
})

/*********************************************/

const randomInt = () => {
  let randomFloat = Math.random();
  let bigRandomFloat = randomFloat * 100000;
  let randomInt = Math.floor(bigRandomFloat);

  return randomInt;
};

app.listen(PORT, () => {
  console.log("Aplication is listening on port ", PORT);
});
