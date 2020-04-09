const mongoose = require('mongoose')

const Schema = mongoose.Schema;

// RFC2822 Email Validation
// regexr.com/2rhq7
const emailRegEx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g

const messagesSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type:String,
        validate: emailRegEx,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    app: {
        type: String
    }

});

module.exports.messagesModel = mongoose.model('Messages', messagesSchema, 'messages')
module.exports.messagesSchema = messagesSchema
