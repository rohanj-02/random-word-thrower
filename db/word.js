const mongoose = require('mongoose');

const Schema = mongoose.Schema();
const Model = mongoose.Model();

const WordSchema = new Schema({
    user: String,
    word: String,
    meaning: String,
    sentence: String,
});

const WordModel = new Model('Word', WordSchema);

export default WordModel;