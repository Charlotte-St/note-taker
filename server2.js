const express = require('express');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const {readFromFile, readAndAppend } = require('./assets/js/helpers/fsUtils');

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static('public'));

//API routes to serve the static pages
app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'public/notes.html')));

//API route to GET notes

app.get('/api/notes', (req, res) => {
    console.info(`${req.method} received`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
})

//API route to POST notes
app.post('/api/notes', (req, res) => {
    console.info(`${req.method} received`);

    const { title, text} = req.body;

    if (title && text) {
        const newNote = {
            title,
            text,
            id: uuidv4()
        };
    console.log(newNote);
    
    readAndAppend(newNote, './db/db.json');

    const response = {
       status: 'success',
      body: newNote,
    };

    res.json(response);
} else {
   res.json('Error in saving note');
}
});

//API route to delete notes

app.delete('/api/notes/:id', (req, res) => {
    console.log(`${req.method} sent`);
   //console.log(`${req.id}`);
});

app.listen(PORT, () => 
console.log(`App listening at http://localhost:${PORT}`));