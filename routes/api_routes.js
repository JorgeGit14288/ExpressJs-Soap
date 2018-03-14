var express = require('express');
var router = express.Router();

var controllers = require('../controllers/api_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Api Rest Example' });
});

//TEST PAGE
router.get('/test', controllers.test.getTest);
router.get('/test/photos', controllers.test.getPhotos);
router.get('/test/posts', controllers.test.getPosts);
router.get('/test/users', controllers.test.getUsers)
router.get('/test/soap', controllers.test.getXml);
module.exports = router;
