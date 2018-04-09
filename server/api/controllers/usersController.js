
// we should import models here 
// var something = require('somewhenpmre'); 
let user = require('../models/users.model')
// var bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());

// return all users name 
exports.genericList = function (req, res) {
    var result;

    users.findOne({}, function (err, data) {
        if (err) {
            return handleError(err);
        };
        console.log('request received : genericList', data.name.firstName);
        res.send(`data receivied  : name: ${data.name.firstName} -- lastname: ${data.name.lastName}`);
    });
}

//return one users
exports.oneUser = function (req, res) {
    res.send('NOT IMPELEMENTED .. ');
}


//create one contact
exports.createUser = function (req, res) {
    var newUser = new user();

    newUser.name.firstName = req.body.firstName;
    newUser.name.lastName = req.body.lastName;
    newUser.number = parseInt(req.body.number);
    newUser.save(function(err, inserted_user){
        if(err){
            res.send({ret: false});
            console.log("err in adding new user: " + err);  
        } 
        else{
            res.send({ret: true});
        }
    });
}

//delete one contact
exports.deleteUser = function (req, res) {
    res.send('NOT IMPELEMENTED .. ');
}