const mongoose = require('mongoose');
const validator = require('validator')

const userModel = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name must be specified.']
    },
    email: {
        type: String,
        required: [true, 'E-mail must be specified.'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, props => `${props.value} is not a valid value`]
    },
    password: {
        type: String,
        required: [true, 'Please, provide a valid password.']
    }
});

module.exports = mongoose.model('User', userModel);