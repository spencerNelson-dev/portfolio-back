const express = require('express');
const router = express.Router();
const {userSchema, usersModel} = require('../../../db/mongoose-models/user-model')
const db = require('../../../db/dal-mongoose')
const jwtUtils = require('../../../bin/jwtUtils')

// we have to bind verifyBearerToken
let verifyBearerToken = jwtUtils.verifyBearerToken.bind(jwtUtils)

/* GET users listing. */
router.get('/', verifyBearerToken, function(req, res, next) {
  
  let dbObject = new db.DbObject(usersModel,)

  db.findAll(dbObject)
  .then(result => {
    res.json(result)
  })
  .catch(error => {
    res.json(error)
  })
});

// Create a user
router.post('/', verifyBearerToken, async function(req, res, next) {

    let dbObject = new db.DbObject(usersModel, req.body)


    if(dbObject.doc.hasOwnProperty('password')){

        // create a user with the password
        // encrypted
        await bcrypt.hash(dbObject.doc.password, 5)
        .then(passHash => {

            dbObject.doc.password = passHash
        })

    } else {
        rtnValue = new Promise().reject("No password with user")
    }

  
    db.create(dbObject)
    .then(result => {

      res.json(result)
    })
    .catch(error => {

      console.log(error)
      res.json(error)
    })
  })





module.exports = router;