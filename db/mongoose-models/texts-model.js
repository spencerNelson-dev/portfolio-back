const mongoose = require('mongoose')

const Schema = mongoose.Schema;



const textsSchema = new Schema({
    location:{
        type: String
    },
    text:{
        type:String
    }
});

module.exports.textsModel = mongoose.model('Texts', textsSchema, 'texts')
module.exports.textsSchema = textsSchema