const mongoose = require('../../Connection/connectToDb');

const Schema = mongoose.Schema;

const devuser = new Schema({
    name: { type: String, required: true },
    number: { type: Number, required: true }
},
    {
        collection: 'devuser'
    }
);

module.exports = mongoose.model('devuser', devuser); 