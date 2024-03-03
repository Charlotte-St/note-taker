const router = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

router.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

router.post('/notes', (req, res) => {
    console.log(req.body);

    const {title, text} = req.body;

    if (req.body) {
        const newNote = {
            title, 
            text,
        };

    readAndAppend(newNote, './db/db.json');
    } else {
        res.errored('Error in adding note')
    }
})

module.exports = router;