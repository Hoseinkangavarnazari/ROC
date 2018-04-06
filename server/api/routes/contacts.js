var express = require('express');
var router = express.Router();

// Require controller modules.
var contactsController = require('../controllers/contactsController');




module.exports = router;




module.exports = (function () {
    'use strict';
    var router = require('express').Router();


    // GET catalog home page.
    router.get('/all', contactsController.genericList);

    // GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
    router.get('/one', contactsController.oneContact);

    // POST request for create contact
    router.post('/create', contactsController.createContact);

    // DELETE request for eliminate contact
    router.delete('/delete/:id', contactsController.deleteContact)

    return router;
})();