import express from 'express';
import login from './user-login.js';
import signup from './user-signup.js';
import changePassword from './user-change-password.js';
import bet from './user-bet.js';
import info from './user-info.js';
import auth from '../utils/auth.js';

const router = express.Router();

router.post('/login', login);
router.post('/signup', signup);
router.post('/changePassword', auth, changePassword);
router.post('/bet', auth, bet);
router.get('/info', auth, info);

export default router;
