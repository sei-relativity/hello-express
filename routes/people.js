const express = require('express');
const router = express.Router();

// Dummy Data
let people = [
  {firstName: 'Usman', lastName: 'Bashir'},
  {firstName: 'Reem', lastName: 'AlHarbi'},
  {firstName: 'Mansour', lastName: 'Almohsen'},
  {firstName: 'Hazim', lastName: 'Alblowi'},
  {firstName: 'Mr', lastName: 'P'},
];

// Get All People
router.get('/api/people', function(req, res) {
  res.json({ people: people });
});

// Get Person by Record ID
router.get('/api/people/:id', function(req, res) {
  const personID = req.params.id;

  if (!isNaN(personID)) {
    const person = people[personID];
  
    if (person !== undefined) {
      res.json({ person: person });
    } else {
      res.status(404).json({ error: 'Person Not Found' });
    }
  } else {
    // Invalid ID Case
    res.status(406).json({
      error: 'Invalid ID'
    });
  }
});

// Create a Person
router.post('/api/people', function(req, res) {
  console.log(req.body);

  people.push(req.body.person);

  res.status(201).json({ people: people });
});

module.exports = router;