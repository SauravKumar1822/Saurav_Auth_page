const mongoose = require('mongoose');

const contact = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your username'],
        trim: true,
        maxlength: [50, 'Name cannot be more than 50 characters']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        trim: true,
        unique: true,
        maxlength: [50, 'Email cannot be more than 50 characters']
    },
    message: {
        type: String,
        required: [true, 'Please enter a message'],
    },
}, {
    timestamps: true
})

const cntdata = mongoose.model('contact_data', contact);
//export the model
module.exports = cntdata;