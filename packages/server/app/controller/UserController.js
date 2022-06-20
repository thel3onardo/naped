const user = require('../models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class UserController {
    async signUp(req, res) {
        try {
            const userAlreadyExists = await user.findOne({ email: req.body.email });
            if (userAlreadyExists) {
                return res.status(500).json({
                    error: 'User already registered'
                })
            }

            const salt = await bcrypt.genSalt(12);
            const password = await bcrypt.hash(req.body.password, salt);
            const newUser = await user.create({ email: req.body.email, password, name: req.body.name });
            const token = jwt.sign({ id: newUser?._id, email: newUser.email }, process.env.JWT_SECRET);

            return res.status(200).json({
                message: 'User created.',
                token
            });
        } catch (err) {
            return console.log(err);
        }
    }
    async login(req, res) {
        const { email, password } = req.body;
        
        const userFound = await user.findOne({ email });
        if (!userFound) {
            res.status(500).json({
                error: 'User not found'
            })
        }
        const passwordMatches = await bcrypt.compare(password, userFound.password);
        if (!passwordMatches) {
            return res.status(500).json({
                error: 'Invalid password'
            })
        }

        try {
            const token = jwt.sign({ id: user._id, email }, process.env.JWT_SECRET);
            res.status(200).json({
                message: 'Logged successfully',
                token: token
            }) 
        } catch (err) {
            res.status(500).json({
                error: err
            })
        }
    }
}

module.exports = new UserController();