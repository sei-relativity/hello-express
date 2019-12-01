// Load ExpressJS
const express = require('express');

// Create a new express server
const app = express();

// Tells the server where to listen for requests
const port = 3000;

app.get('/', function(req, res) {
  res.send('Hello SEI!');
});

app.get('/greeting', function(req, res) {
  res.send('Hey, SEI!');
});

app.get('/rihanna', (req, res) => {
  res.send('Work work work work work');
});

app.listen(port, function() {
  // tells the server where to listen for requests
  // on port 3000
  console.log(`hello-express is listening on port ${port}`);
});