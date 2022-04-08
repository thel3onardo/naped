const user = require('../models/UserModel');

class UserController {
    async store(req, res) {
        try {
            const newUser = await user.create(req.body);
            
            return res.status(200).json({
                message: 'user created successfully.'
            })
        } catch (err) {
            return res.status(500).json({ error: (err.name === 'MongoServerError' && err.code === 11000) ? 'E-mail already registered in our codebase' : err.message })
        }
    }
}

module.exports = new UserController();