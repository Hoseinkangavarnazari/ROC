const mongoose = require('../../Connection/connectToDb');

const Schema = mongoose.Schema;

const user = new Schema({
    name: {
        familyName: { type: String, required: true },
        givenName: { type: String, required: true }
    },
    email: { type: String, required: true },
    googID: { type: String, required: true },
    googToken: { type: String, required: true },
    number: { type: Number, required: true },
    links:Array
});

//colection moved to bottom line
module.exports = mongoose.model('user', user, 'users'); 