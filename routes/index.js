const express = require('express');
const router = express.Router();


router.get('/',require('../controllers/home_controller').home);

router.use('/users',require('./user_routes'));

module.exports = router;