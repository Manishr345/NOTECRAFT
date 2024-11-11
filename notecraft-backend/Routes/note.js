const express = require('express');
const router = express.Router();
const Note = require('../Models/note');
const fetchUser = require('../Middlewear/fetchUser');
const { body, validationResult } = require('express-validator');

router.get('/fetchnotes', fetchUser, async (req, res) => {
    try {
        const note = await Note.find({ user: req.user.id });
        res.send(note);
    } catch (error) {
        console.log(error.message);
        res.send('Internal server error');
    }
});

router.post('/addnotes', fetchUser, [
    body('title', 'Title must be of atleast 3 characters').isLength({ min: 3 }),
    body('description', 'description must be of atleast 8 characters').isLength({ min: 8 })
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.array() });
        }
        const { title, description, tag } = req.body;
        const note = new Note({
            title, description, tag, user: req.user.id
        });
        const newNote = await note.save();
        res.send(newNote);
    } catch (error) {
        console.log(error.message);
        res.send('Internal server error');
    }
});

router.put('/updatenotes/:id', fetchUser, [
    body('title', 'Title must be of atleast 3 characters').isLength({ min: 3 }),
    body('description', 'description must be of atleast 8 characters').isLength({ min: 8 })
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.array() });
        }
        const { title, description, tag } = req.body;
        let newNote = {};
        if (title) {
            newNote.title = title
        }
        if (description) {
            newNote.description = description
        }
        if (tag) {
            newNote.tag = tag
        }
        let note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(400).json({ error: 'Note not found' });
        }
        if (note.user.toString() !== req.user.id) {
            return res.status(401).json({ error: 'Not allowed' });
        }
        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
        res.send(note);
    } catch (error) {
        console.log(error.message);
        res.send('Internal server error');
    }
})

module.exports = router;