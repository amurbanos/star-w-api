const express = require('express');
const router = express.Router();
const peopleController = require('../controllers/peopleController');

router.get('/people', peopleController.list);

router.post('/people/import', peopleController.import);

module.exports = router;