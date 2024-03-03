const router = require('express').Router();
const express = require('express');

const app = express();
app.use(express.json());

const notesRouter = require('./apiRoutes');

router.use('/notes', notesRouter);

module.exports = router;