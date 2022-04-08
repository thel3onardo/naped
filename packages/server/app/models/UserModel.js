const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name must be specified.']
    },
    email: {
        type: String,
        required: [true, 'E-mail must be specified.'],
        unique: true,
    }
})