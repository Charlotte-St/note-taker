const router = require('express').Router();

const notesRouter = require('./apiRoutes');

router.use('/notes', notesRouter);

module.exports = router;