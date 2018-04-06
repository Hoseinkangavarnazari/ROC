var express = require('express');
var router = express.Router();

var devuser = require('../model/devuser.model');


router.get('/dev', function (req, res) {

    // devuser.find({}).then(
    //     (users) => {
    //         console.log(users);
    //     }).catch((err) => {
    //         console.log("an error occured while reading data : " + err);
    //     });


    res.set('Content-Type', 'application/json');
    res.send('{"message":"test file from dev modules"}');


    ////old method
    // devuser.findOne({}, function (err, data) {
    //     if (err) return handleError(err);
    //     // Prints "Space Ghost is a talk show host".
    //     console.log('%s %s is a %s.', data);
    // });
});

module.exports = router; 