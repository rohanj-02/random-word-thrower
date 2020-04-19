const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WordSchema = new Schema({
    user: {type: String},
    word: {type: String},
    meaning: {type: String},
    sentence: {type: String},
    toBeAsked: {type: Boolean}
});

const Word = mongoose.model('Word', WordSchema);

module.exports = Word;