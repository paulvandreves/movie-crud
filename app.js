const express = require('express');
const app = express();
const router = require('./routes.js');
const bodyParser = require('body-parser');
const PORT = processs.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use('/', router);



app.use(express.static('public'));
// tells your app that everything in the public folder can use routes.js
const fileAsync = require('lowdb/lib/storages/file-async');
// import const low = require('lowdb')
// creating app file listening and exporting
app.listen(PORT, function () {
 console.log('Server listening on port '+ PORT);
});



module.exports = app;
