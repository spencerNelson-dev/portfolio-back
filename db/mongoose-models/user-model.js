const mongoose = require('mongoose')

const Schema = mongoose.Schema;

// RFC2822 Email Validation
// regexr.com/2rhq7
const emailRegEx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g

const usersSchema = new Schema({
    email: {
        type: String,
        validate: emailRegEx,
        required: true
    },
    password: {
        type: String,
        required: true
    }

});

module.exports.usersModel = mongoose.model('Users', usersSchema, 'users')
module.exports.usersSchema = usersSchema
