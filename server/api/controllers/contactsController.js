// we should import models here 
// var something = require('somewhere'); 
let contacts = require('../models/contacts.model')

// return all contacts name 
exports.genericList = function (req, res) {

    let result;
    users.findOne({}, function (err, data) {
        if (err) {
            return handleError(err);
        };
        console.log('request received : genericList', data);
        result = data;
    });
    res.send(`data receivied  : ${data}`);
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