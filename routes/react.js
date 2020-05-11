var express = require('express');
var router = express.Router();
const path = require('path')


/* Get resume */
router.get('/resume', function(req, res, next) {

  res.sendfile(path.join(__dirname, '/../public/docs/', 'Spencer_Nelson_Resume_2020_May.pdf'))
})

/* GET home page. */
router.get('/*', function(req, res, next) {

  res.sendFile(path.join(__dirname, '/../react/', 'index.html'))
});


module.exports = router;
