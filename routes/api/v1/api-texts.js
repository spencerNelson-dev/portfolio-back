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

module.exports = router