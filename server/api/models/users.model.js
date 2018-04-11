const mongoose = require('../../Connection/connectToDb');

const Schema = mongoose.Schema;

const user = new Schema({
    name: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true }
    },
    number: { type: Number, required: true, unique: true },
    links:Array
});

//colection moved to bottom line
module.exports = mongoose.model('user', user, 'users'); 