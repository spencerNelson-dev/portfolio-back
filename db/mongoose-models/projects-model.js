const mongoose = require('mongoose')

const Schema = mongoose.Schema;



const projectsSchema = new Schema({
    title:{
        type: String
    },
    text:{
        type:String
    },
    liveLink: {
        type: String
    },
    gitHubLinks: {
        type: [String]
    },
    imgSrc: {
        type: String
    }

});

module.exports.projectsModel = mongoose.model('Projects', projectsSchema, 'projects')
module.exports.projectsSchema = projectsSchema
