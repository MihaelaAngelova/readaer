const express = require('express');
const { addUser } = require('../controllers/userController');
const { loginUser } = require('../controllers/authController');
const router = express.Router();

router.post('/register', addUser);

router.post('/login', loginUser);

module.exports = router;
