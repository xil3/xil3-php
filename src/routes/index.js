const express = require('express');
const homeController = require('../controllers/homeController');

const router = express.Router();

router.get('/', homeController.index);
router.post('/send-message', homeController.sendMessage);

module.exports = router;