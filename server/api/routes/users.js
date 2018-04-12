var express = require('express');

// Require controller modules.
var usersController = require('../controllers/usersController');



module.exports = (function () {
    'use strict';
    var router = require('express').Router();


    // GET catalog home page.
    router.get('/allContacts', usersController.allContacts);

    // GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
    router.get('/oneContactInfo', usersController.oneUser);

    // POST request for create contact
    router.post('/SignUpUser', usersController.createUser);

    // POST request for create contact
    router.post('/addContact', usersController.addContact);

    // DELETE request for eliminate contact
    router.delete('/deleteContact', usersController.deleteContact);

    return router;
})();