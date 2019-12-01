// Load ExpressJS
const express = require('express');

const indexRouter = require('./routes/index');
const peopleRouter = require('./routes/people');

// Create a new express server
const app = express();

/*** Middleware ***/

// Parse JSON request sent by the user
// and convert it into JS Object before
// a Route uses it.
app.use(express.json());

/*** Routes ***/
app.use('/', indexRouter);
app.use(peopleRouter);

// Tells the server where to listen for requests
const port = 3000;


// app.get('/', function(req, res) {
//   res.send('Hello SEI!');
// });

app.get('/greeting', function(req, res) {
  res.send('Hey, SEI!');
});

app.get('/rihanna', (req, res) => {
  res.send('Work work work work work');
});

app.get('/sightings', function(req, res) {
  res.send(`How many ufo sightings you think there are in that ${req.query.state}? ${req.query.sights}.`)
});

app.get('/bigfoot', function(req, res) {
  // blurry=true|false
  if (req.query.blurry === "true") {
    res.send("It's not the photographer's fault. Bigfoot is blurry, and that's extra scary to me. There's a large, out-of-focus monster roaming the countryside! Run! He's fuzzy! Get out of there!");
  } else {
    res.send("FALSE!!!!");
  }
});


//    /hello/:name?human=true

app.get('/hello/:name', function(req, res) {
  res.send({params: req.params, queries: req.query});
});

// /usman
// /:name
/*
  http:://localhost:3000/users/42/friends/9000
  
  http://locahost:3000/users/:user_id/friends/:friend_id

*/
// localhost:3000/usman?first_name=usman
app.get('/:name', function(req, res) {
  console.log(req.params);
  console.log(req.route);
  console.log(req.query);

  res.send(`Hello, ${req.params.name}. My name is ${req.query.first_name} ${req.query.last_name}.`);
});

//  /food/:food
app.get('/food/:food' , function(req, res) {
  res.send(`I really love ${req.params.food}.`);
});


// localhost:3000/favorite/car
// localhost:3000/favorite/color?color=red
// localhost:3000/favorite/food

// locahost:3000/favorite/:item


/*
  ?q=foo&a=bar&pageNo=42

  {
    q: 'foo',
    a: 'bar',
    pageNo: 42
  }
*/

app.listen(port, function() {
  // tells the server where to listen for requests
  // on port 3000
  console.log(`hello-express is listening on port ${port}`);
});