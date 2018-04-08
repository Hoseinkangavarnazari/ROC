const mongoose = require('../../Connection/connectToDbN');

const Schema = mongoose.Schema;

const contacts = new Schema({
    name: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true }
    },
    number: { type: Number, required: true }
},
    {
        collection: 'contacts'
    }
);

module.exports = mongoose.model('contacts', contacts); 