var express = require('express');


// Require controller modules.
var contactsController = require('../controllers/contactsController');

module.exports = (function () {
    'use strict';
    var router = require('express').Router();


    // GET catalog home page.
    router.get('/all', contactsController.previewUsers);

    // GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
    router.get('/one', contactsController.oneContact);

    // POST request for create contact
    router.post('/add', contactsController.createContact);

    // DELETE request for eliminate contact
    router.delete('/delete', contactsController.deleteContact)

    return router;
})();