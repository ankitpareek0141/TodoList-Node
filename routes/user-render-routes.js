const router = require('express').Router();
const renderController = require('../services/user-render');

router.get('/', renderController.renderHome);
router.get('/add-Item', renderController.renderAddItem);
router.get('/view-item/:id', renderController.renderViewItem);

module.exports = router;

