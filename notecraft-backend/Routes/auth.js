const express = require('express');
const router = express.Router();
const User = require('../Models/user');
const {body, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');

router.post('/', [
    body('name', 'Name must be of atleast 3 characters').isLength({min: 3}),
    body('email', 'Please enter a valid email').isEmail(),
    body('password', 'Password must be of atleast 8 characters').isLength({min: 8})
], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({error: errors.array()});
    }
    let user = await User.findOne({email: req.body.email});
    if(user){
        return res.status(400).json({error: 'User with this email already exists'});
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: hash
    });
    res.send(user);
})

module.exports = router;