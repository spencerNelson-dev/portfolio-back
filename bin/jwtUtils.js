const jwt = require('jsonwebtoken')
require('dotenv').config()

const jwtUtils = {

    newToken (payload){

        return new Promise((resolve, reject) => {

            jwt.sign(payload, process.env.JWT_KEY, { expiresIn: '1h' }, (error, token) => {

                if (error !== null) {
                    reject(error)
                } else {
                    resolve(token)
                }
            })
        })
    },

    verifyToken(token) {
        console.log("verifyToken", token)

        return new Promise((resolve, reject) => {

            jwt.verify(token, process.env.JWT_KEY, (error, payload) => {

                if (error !== null) {
                    reject(error)
                } else {
                    resolve(payload)
                }
            })
        })
    },

    verifyBearerToken(req, res, next) {

        // isolate the bearer token from the headers
        let bearerToken = req.headers.authorization.split(' ')[1]

        this.verifyToken(bearerToken)
        .then(payload => {
            //TODO
            //Check that the payload contains the user

            //and that the user is in the db

            //refresh the token

            next()
        })
        .catch(error => {

            console.log(error)
            res.json(error)
        })

    }

}


module.exports = jwtUtils
