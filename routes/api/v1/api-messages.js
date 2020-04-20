var express = require('express');
var router = express.Router();
const { messagesModel } = require('../../../db/mongoose-models/messages-model')
const db = require('../../../db/dal-mongoose')
const fs = require('fs')
const jwtUtils = require('../../../bin/jwtUtils')

// we have to bind verifyBearerToken
let verifyBearerToken = jwtUtils.verifyBearerToken.bind(jwtUtils)

// POST - Create a new message to db
router.post('/', function(req, res, next) {

    let dbObject = new db.DbObject(messagesModel,req.body)

    db.create(dbObject)
    .then(result => {
        res.json(result)
    })
    .catch(error => {
        console.log(error)
        res.json(error)
    })
})

router.get('/', verifyBearerToken, function(req, res, next) {

    let dbObject = new db.DbObject(messagesModel)

    db.findAll(dbObject)
    .then(result => {
        res.json(result)
    })
    .catch(error => {
        console.log(error)
        res.json(error)
    })
})

router.delete('/:id', verifyBearerToken, function(req, res, next) {

    let dbObject = new db.DbObject(messagesModel, null, req.params.id)

    db.del(dbObject)
    .then(result => {
        res.json(result)
    })
    .catch(error => {
        console.log(error)
        res.json(error)
    })

})

module.exports = router;