var express = require('express');
var router = express.Router();
const { projectsModel } = require('../../../db/mongoose-models/projects-model')
const db = require('../../../db/dal-mongoose')
const fs = require('fs')
const jwtUtils = require('../../../bin/jwtUtils')

// we have to bind verifyBearerToken
let verifyBearerToken = jwtUtils.verifyBearerToken.bind(jwtUtils)


/* GET all projects*/
router.get('/', function (req, res, next) {

    let dbObject = new db.DbObject(projectsModel, req.body)

    db.findAll(dbObject)
        .then(result => {
            res.json(result)
        })
        .catch(error => {
            res.json(error)
        })

});

/* POST - CREATE new project */
router.post('/', verifyBearerToken, function (req, res, next) {

    let dbOjbect = new db.DbObject(projectsModel, req.body)

    db.create(dbOjbect)
        .then(result => {

            res.json(result)
        })
        .catch(error => {
            console.log(error)
            res.json(error)
        })
})

router.delete('/:id', verifyBearerToken, function (req, res, next) {

    let dbObject = new db.DbObject(projectsModel, null, req.params.id)

    db.del(dbObject)
        .then(result => {

            res.json(result)
        })
        .catch(error => {
            console.log(error)
            res.json(error)
        })
})

router.patch('/:id', verifyBearerToken, function (req, res, next) {

    let dbObject = new db.DbObject(projectsModel, req.body, req.params.id)

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


/* endpoints dealing with images */

//TODO:
// Seperate these to their own routes
// api/v1/images instead of api/v1/projects/img
// save the images to a aws or google cloud storage solution

router.get('/img', function (req, res, next) {

    new Promise((resolve, reject) => {

        fs.readdir('./public/images', function (error, files) {

            if (error) {
                reject(error)
            }

            resolve(files)
        })
    })
        .then(result => {
            res.json(result)
        })
        .catch(error => {
            res.json(error)
        })


})


//https://github.com/richardgirges/express-fileupload/tree/master/example#basic-file-upload
//https://medium.com/signature-networks/file-upload-with-node-js-react-js-686e342ad7e7
//upload a images to our public/images folder
router.post('/img/upload', verifyBearerToken, function (req, res, next) {

    if (!req.files || Object.keys(req.files).length === 0) {

        console.log(error)
        return res.json("No Files were uploaded")
    }

    let uploadedFile = req.files.file

    //check to see if it is a jpg or png
    let fileType = uploadedFile.name.split('.')[1]

    if (fileType !== 'jpg' && fileType !== 'png') {

        // if not send a failed message
        res.json("The file is not an jpg or png")
    }

    // move the file to the images directory
    uploadedFile.mv(`./public/images/${uploadedFile.name}`, function (error) {
        if (error) {

            console.log(error)
            // if failed send fail message
            return res.json("Upload Failed!")
        } else {

            // send success message
            res.json('File Uploaded!')
        }
    })


})

module.exports = router;