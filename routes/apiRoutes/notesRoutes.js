const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const { createNote, deleteNote } = require('../../lib/notes');
const notes = require('../../lib/notes');

router.get('/notes', (req, res) => {
    let result = (notes);
    res.send(result);
    console.log(notes);
    console.log(result);
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    const note = createNote(req.body, notes);
    res.json(note);
});

router.delete('/notes/:id', (req, res) => {
    const deleteNote = deleteNote(req.params.id, notes);
    res.json(notes);
});

module.exports = router;