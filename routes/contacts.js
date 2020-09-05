const express = require('express');

const router = express.Router();

// @route Get api/contacts
// @desc Get all users contacts
// @access Public
router.get('/', (req, res) => {
res.send('Get all contacts');
});

// @route Post api/contacts
// @desc Add a new contact
// @access Private
router.post('/', (req, res) => {
    res.send('Create a new contact');
    });

// @route Put api/contacts
// @desc Update a contact
// @access Private
router.put('/:id', (req, res) => {
    res.send('Update');
    });

// @route DELETE api/contacts
// @desc Delete a contact
// @access Private
router.delete('/:id', (req, res) => {
    res.send('Delete contact');
    });

module.exports = router;