var express = require('express');

// Require controller modules.
var usersController = require('../controllers/usersController');



module.exports = (function () {
    'use strict';
    var router = require('express').Router();


    // GET catalog home page.
    router.get('/all', usersController.genericList);

    // GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
    router.get('/one', usersController.oneUser);

    // POST request for create contact
    router.post('/create', usersController.createUser);

    // DELETE request for eliminate contact
    router.delete('/delete/:id', usersController.deleteUser);

    return router;
})();