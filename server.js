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
  Word.find({}, (err, words) => {
    res.send(words);
    console.log(words);
  });

});

app.listen(port, () => console.log(`Listening on port ${port}`));