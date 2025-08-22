const express = require('express');
const blogController = require('../controllers/blogController');

const router = express.Router();

router.get('/', blogController.index);
router.get('/funplace/add', blogController.showAddForm);
router.get('/funplace/edit/:id', blogController.showEditForm);
router.post('/funplace/update', blogController.create);
router.post('/funplace/update/:id', blogController.update);
router.get('/:id/:articleName', blogController.show);

module.exports = router;