var express = require('express');
var router = express.Router();
const { textsModel } = require('../../../db/mongoose-models/texts-model')
const db = require('../../../db/dal-mongoose')
const fs = require('fs')
const jwtUtils = require('../../../bin/jwtUtils')

// we have to bind verifyBearerToken
let verifyBearerToken = jwtUtils.verifyBearerToken.bind(jwtUtils)


/* GET all texts*/
router.get('/', function (req, res, next) {

    let dbObject = new db.DbObject(textsModel)

    db.findAll(dbObject)
        .then(result => {
            res.json(result)
        })
        .catch(error => {
            res.json(error)
        })

});

/* POST - CREATE new text */
router.post('/', function (req, res, next) {

    let dbOjbect = new db.DbObject(textsModel, req.body)

    db.create(dbOjbect)
        .then(result => {

            res.json(result)
        })
        .catch(error => {
            console.log(error)
            res.json(error)
        })
})

// DELETE text
router.delete('/:id', function (req, res, next) {

    let dbObject = new db.DbObject(textsModel, null, req.params.id)

    db.del(dbObject)
        .then(result => {

            res.json(result)
        })
        .catch(error => {
            console.log(error)
            res.json(error)
        })
})

// Update - Patch a text by id
router.patch('/:id', verifyBearerToken, function (req, res, next) {

    let dbObject = new db.DbObject(textsModel, req.body, req.params.id)

    db.updateOne(dbObject)
        .then(result => {
            console.log(result)
            res.json(result)
        })
        .catch(error => {
            console.log(error)
            res.json(error)
        })
})

module.exports = router