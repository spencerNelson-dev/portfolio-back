const express = require('express');
const router = express.Router();
const { userSchema, usersModel } = require('../../../db/mongoose-models/user-model')
const db = require('../../../db/dal-mongoose')
const bcrypt = require('bcrypt')
const jwtUtils = require('../../../bin/jwtUtils')

const verifyEmail = async (email) => {

    let isVerified = false

    let dbObject = new db.DbObject(usersModel, email)

    try {
        let dbUsers = await db.findAll(dbObject)

        for (user of dbUsers) {

            // if the request contains an email that matches
            if (user.email === email) {

                // then the email is verified
                isVerified = true
            }
        }

        return isVerified
    } catch (error) {
        console.log(error)
        return isVerified = false
    }

    

}


router.post('/login', async function (req, res, next) {

    // set the default token as empty
    let token = ""

    // Create  our dbObject to store our db information
    let dbObject = new db.DbObject(usersModel, req.body)


    try {
        // get an array of all the users in the db
        let dbUsers = await db.findAll(dbObject)

        // loop through the array of users from the db
        for (user of dbUsers) {

            // if the request contains an email that matches
            if (user.email === req.body.email) {

                //if found check password
                if (await bcrypt.compare(req.body.password, user.password)) {

                    // if matched with correct password, create a jwt with the email as the payload
                    token = await jwtUtils.newToken({email: user.email})
                }
            }
        }
    } catch (error) {
        // if there was an error send the error
        console.log(error)
        res.json(token)
    }
    // Send back the token
    res.json(token)

}) // End of post login



module.exports = router;