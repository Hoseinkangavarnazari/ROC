
// we should import models here 
// var something = require('somewhenpmre'); 
let contacts = require('../models/contacts.model');
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// return all contacts name 
exports.genericList = function (req, res) {
    res.send('NOT IMPELEMENTED .. ');
}

//return one contacts
exports.oneContact = function (req, res) {
    var result;

    contacts.findOne({}, function (err, data) {
        if (err) {
            return handleError(err);
        };
        console.log('request received : genericList', data.name.firstName);
        res.send(`data receivied  : name: ${data.name.firstName} -- lastname: ${data.name.lastName}`);
    });
}


//create one contact
exports.createContact = function (req, res) {
    let firstName = req.body.first;
    let lastName = req.body.last;
    let number = req.body.number;

    var record = new contacts({
        name: {
            firstName: firstName,
            lastName: lastName
        },
        number: number
    })

    record.save(function (err) {
        if (err) return handleError(err);
        res.send(`data saved : create user name :  ${req.body.first}`);
    })


}

//delete one contact
exports.deleteContact = function (req, res) {
    let firstName = req.body.first;
    let lastName = req.body.last;

    query.remove({  }, callback)
    res.send('NOT IMPELEMENTED .. ');
}