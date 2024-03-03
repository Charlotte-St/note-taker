const express = require('express');
const path = require('path');
const fs = require('fs');
//const uuid = require('uuid4');
const router = require('express').Router();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/api/notes', (req, res) => {
    res.json(`${req.method} request received to get notes`)
});

app.post('/api/notes', (req, res) => {
    console.info(`${req.method} request received to add a note`)
})

module.exports = router;