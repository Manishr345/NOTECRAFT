const express = require('express');
const router = express.Router();
const User = require('../Models/user');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchUser = require('../Middlewear/fetchUser');

router.post('/signup', [
    body('name', 'Name must be of atleast 3 characters').isLength({ min: 3 }),
    body('email', 'Please enter a valid email').isEmail(),
    body('password', 'Password must be of atleast 8 characters').isLength({ min: 8 })
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.array() });
        }
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: 'User with this email already exists' });
        }
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt);
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hash
        });
        res.send({ successful: 'You have successfully signed up' });
    } catch (error) {
        console.log(error.message);
        res.send('Internal server error');
    }
});

router.post('/login', [
    body('email', 'Please enter a valid email').isEmail(),
    body('password', 'Password cannot be empty').exists()
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.array() });
        }
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: 'Please enter valid credentials' });
        }
        const verifyPass = await bcrypt.compare(password, user.password);
        if (!verifyPass) {
            return res.status(401).json({ error: 'Please enter valid credentials' });
        }
        const userID = {
            user: {
                id: user.id
            }
        };
        const jwtString = 'Nothing';
        const token = jwt.sign(userID, jwtString);
        res.json({ token });
    } catch (error) {
        console.log(error.message);
        res.send('Internal server error');
    }
})

router.post('/fetchuser', fetchUser, async (req, res) => {
    try {
        const userID = req.user.id;
        const user = await User.findById(userID).select('-password');
        res.send(user);
    } catch (error) {
        console.log(error.message);
        res.send('Internal server error');
    }
})

module.exports = router;