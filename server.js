const express = require('express');
const path = require('path');
//const api = require('./assets/js/routes/index');
const apiRoutes = require('./assets/js/routes/apiRoutes');
//const htmlRoutes = require('./assets/js/routes/htmlRoutes');
//const apiRoutes = require('./assets/js/routes/api');

const app = express();

const PORT = 3001;

app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRoutes);

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));