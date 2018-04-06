var express = require('express');
var router = express.Router();

// Require controller modules.
var contactsController = require('../controllers/contactsController');



// GET catalog home page.
router.get('/contacts/all', contactsController.genericList);

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get('/contacts/one', contactsController.oneContact);

// POST request for create contact
router.post('/contacts/create',contactsController.createContact);

// DELETE request for eliminate contact
router.delete('/contacts/delete/:id', contactsController.deleteContact)

module.exports = router;