const express = require('express');
const router = express.Router();
const User = require('../Models/user');

router.post('/', async (req, res) => {
    const user = User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }).then(user => res.json(user));
})

module.exports = router;