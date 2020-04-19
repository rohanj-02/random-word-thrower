const express = require('express');
const mongoose = require('mongoose');
const parseurl = require('parseurl');
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator = require('express-validator');

const Word = require('./db/word');
const keys = require('./config');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// const MongoClient = require('mongodb').MongoClient;
// const uri = keys.DB_URL;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   console.log("Mongo Connection Established");
// });
mongoose.connect(keys.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error: '));
db = mongoose.connection;

app.post('/api/add', (req, res) => {
  //mongo add record
  console.log(req.body);
  var new_record = {
    user: "admin",
    word: req.body.word,
    meaning: req.body.meaning,
    sentence: req.body.sentence,
    toBeAsked: true
  }
  var word = new Word(new_record);
  word.save((err) => {
    if(err){
      res.sendStatus(500);
    }
    res.sendStatus(200);
  });
  // res.send("Hello");
});

app.get('/api/get', (req, res) => {
  //get a random record from mongo and then send back response
  Word.find({}, (err, words) => {
    const length = words.length;
    let randomNumber = Math.random() * 10000000000;
    randomNumber = parseInt(randomNumber) % length;
    res.send(words[randomNumber]);
    console.log(words[randomNumber]);
  });

});

//Checking react and express
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));