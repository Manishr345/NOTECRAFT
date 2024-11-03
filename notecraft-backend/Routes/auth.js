const express = require('express');
const router = express.Router();
const User = require('../Models/user');

router.post('/', async (req, res) => {
    let user = await User.findOne({email: req.body.email});
    if(user){
        return res.status(400).json({error: 'User with this email already exists'});
    }
    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }).then(user => res.json(user));
})

module.exports = router;