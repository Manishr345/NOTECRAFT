const express = require('express');
const router = express.Router();
const Note = require('../Models/note');
const fetchUser = require('../Middlewear/fetchUser');

router.get('/fetchnotes', fetchUser, async (req, res) => {
    const note = await Note.find({ user: req.user.id });
    res.send(note);
});

module.exports = router;