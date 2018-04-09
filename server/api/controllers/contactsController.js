
// we should import models here 
// var something = require('somewhenpmre'); 
let usersModel = require('../models/users.model')

// return all contacts name 
exports.previewUsers = function (req, res) {

    //find the specific user's contacts in DB
    usersModel.findOne({'_id':req.query.id},'links', function(err, userLinks){
        if (err){
            console.log("err in finding all contacts for user: " + id + err);
            res.send({ret: false});
        } 
        else{
            //map Id's to their names
            usersModel.find({'_id':{$in: userLinks.links}},'_id name', function(err, contacts){
                if (err){
                    console.log("err in finding all contacts for user: " + id + err);
                    res.send({ret: false});
                } 
                else res.send(contacts);
            });
        } 
    });  
}

//return one contacts
exports.oneContact = function (req, res) {
    res.send('NOT IMPELEMENTED .. ');
}


//create one contact
exports.createContact = function (req, res) {
    var newUser = new contact();
    newUser.firstName = req.body.firstName;
    newUser.lastName = req.body.lastName;
    newUser.number = req.newUser.number;
}

//delete one contact
exports.deleteContact = function (req, res) {
    res.send('NOT IMPELEMENTED .. ');
}