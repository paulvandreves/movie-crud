const express = require('express');
const router = express.Router();
const low = require('lowdb');
const fileAsync = require('lowdb/lib/storages/file-async');
const db = low('db/db.json', {
 storage: fileAsync
});

router.get('/movies', function (request, response) {
 var movies = db.get('movies');
 response.send(movies);
});
// add
router.get('/movies/:id', function (request, response) {
  //var devId = parseInt(request.params.id);
 var devId = request.params.id;
 console.log(devId);
 var oneDeveloper = db.get('movies').find({
  id: devId
 });
 response.send(oneDeveloper);
});

// := is for numbers
router.post('/movies', function (request, response) {
 db.get('movies')
  .push(request.body) // just like array .push
  .write() // write must happen after push // sorta like saving to a word doc
  .then(newDev => {
   response.status(201).send(newDev);
  })
  .catch(err => {
   console.log(err);
  })
})

router.put('/movies/:id', (req, res) => {
 //var devId = parseInt(req.params.id);
 var devId = req.params.id;
 console.log(req.body);
 db.get('movies')
  .find({
   id: devId
  })
  .assign(req.body) // should attach to object in real world
  .write()
  // if promise is resolved do this if rejected do this
  .then(updatedDev => {
   res.send(updatedDev) // with olny one arg in callback no () required
  })
  .catch(err => {
   console.log(err);
  })
})

router.delete('/movies/:id', (req, res) => {
 //var devId = parseInt(req.params.id);
 var devId = req.params.id;
 db.get('movies')
  .remove({
   id: devId
  })
  .write()
  .then(deletedDev => {
   res.status(204).send(); // .send sends response
  })
  .catch(err => {
   console.log(err);
  })
});

module.exports = router;
