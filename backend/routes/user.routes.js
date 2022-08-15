const { Router } = require('express');
const router = Router();

const authController = require('../controllers/auth.controllers');

router.post('/signup', authController.signup);
router.get('/logout', authController.logout);

router.route('/login').post(authController.login).get(authController.authCheck);

module.exports = { userRouter: router };
