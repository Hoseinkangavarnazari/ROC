
// we should import models here 
// var something = require('somewhenpmre'); 
let contacts = require('../models/contacts.model')

// return all contacts name 
exports.genericList = function (req, res) {
    var result;

    contacts.findOne({}, function (err, data) {
        if (err) {
            return handleError(err);
        };
        console.log('request received : genericList', data.name.firstName);
        res.send(`data receivied  : name: ${data.name.firstName} -- lastname: ${data.name.lastName}`);
    });

}

//return one contacts
exports.oneContact = function (req, res) {
    res.send('NOT IMPELEMENTED .. ');
}


//create one contact
exports.createContact = function (req, res) {
    res.send('NOT IMPELEMENTED .. ');
}

//delete one contact
exports.deleteContact = function (req, res) {
    res.send('NOT IMPELEMENTED .. ');
}