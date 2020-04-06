const mongoose = require('mongoose')
require('dotenv').config()
const bcrypt = require('bcrypt')

class DbObject {

    constructor(model, doc = null, id = null, search = null){
        this.doc = doc,
        this.model = model,
        this.id = id,
        this.search = search
    }
}

function connect() {

    const uri = process.env.MONGO_DB_CONNECTION_STRING
    
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: "portfolio"
    })
}

function close() {

    mongoose.connection.close()
}

function findAll(dbObject) {
    let rtnVal

    if(dbObject.model != null){
        rtnVal = dbObject.model.find().exec()
    } else {
        rtnVal = new Promise().reject("Could not find")
    }

    return rtnVal

}

function create(dbObject) {
    console.log("db create")


    return dbObject.model.create(dbObject.doc)
}

function del(dbObject) {
    let rtnValue

    if(dbObject != null){

        rtnValue = dbObject.model.deleteOne({_id: dbObject.id}).exec()
    } else {
        rtnValue = new Promise().reject("Could not Delete")
    }

    return rtnValue
}

function updateOne(dbObject) {
    let rtnVal

    if(dbObject != null){

        rtnVal = dbObject.model.updateOne({_id: dbObject.id}, dbObject.doc).exec()
    } else {
        rtnVal = new Promise().reject("Could not Delete")
    }

    return rtnVal
}

module.exports.DbObject = DbObject
module.exports.close = close
module.exports.findAll = findAll
module.exports.connect = connect
module.exports.create = create
module.exports.del = del
module.exports.updateOne = updateOne
