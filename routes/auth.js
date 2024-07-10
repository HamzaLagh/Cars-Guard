
import express from 'express';
import { check, validationResult } from 'express-validator';
import { register, login, logout } from '../controllers/authController.js';

const router = express.Router();

router.post(    '/register',
    [
        check('username', 'Username is required').not().isEmpty(),
        check('password', 'Password is required').isLength({ min: 6 })
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        register(req, res);
    }
);

router.post(
    '/login',
    [
        check('username', 'Username is required').not().isEmpty(),
        check('password', 'Password is required').isLength({ min: 6 })
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        login(req, res);
    }
);

router.post('/logout', logout);

router.get("/test", function(req, res) {
    res.send("je renvoie quelques chose")
})

export default router;

