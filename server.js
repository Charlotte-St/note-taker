const express = require('express');
const path = require('path');
//const apiRoutes = require('./public/assets/js/routes/apiRoutes');
//const htmlRoutes = require('./public/assets/js/routes/htmlRoutes');
const api = require('./public/assets/js/routes/index')

const app = express();

const PORT = 3001;

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use('/api', api);

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));