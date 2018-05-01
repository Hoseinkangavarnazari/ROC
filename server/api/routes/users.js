'use strict';
var express = require('express');

var usersController = require('../controllers/usersController');
var router = require('express').Router();


module.exports = (function () {


    // GET catalog home page.
    router.get('/allContacts', usersController.allContacts);

    // GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
    //TODO -> implement
    router.get('/oneContactInfo', usersController.oneUser);

    // POST request for create contact
    //router.post('/SignUpUser', usersController.createUser);   //PreDeletion --> handeled in googAuth method 

    // POST request for create contact
    router.post('/addContact', usersController.addContact);

    // DELETE request for eliminate contact
    router.delete('/deleteContact', usersController.deleteContact);

   
    return router;
})();


module.exports.googAuth = function(token, profileID, name, email, done){
   usersController.googAuth(token, profileID, name, email, done);
}

