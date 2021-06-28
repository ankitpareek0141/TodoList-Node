const router = require('express').Router();
const controller = require('../services/user-services');

router.post('/insertItem', controller.insertItem);

// router.get('/viewItem/:id', controller.viewItem);

module.exports = router;