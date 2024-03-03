const router = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
router.use(express.urlencoded())


router.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

router.post('/notes', (req, res) => {
    res.json({requestBody: req.body})
    
    //console.log(req.body);

    //const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title, 
            text,
            note_id: uuidv4(),
        };

    const stringNote = JSON.stringify(newNote);
    readAndAppend(stringNote, './db/db.json');
    res.json(`Note added successfully`)
    } else {
        res.status(500)
    }
})

module.exports = router;