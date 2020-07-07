var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET About Page */
router.get('/about', function(req, res, next) {
  res.render('about');
});

/* GET Services Page */
router.get('/services', function(req, res, next) {
  res.render('services');
});

/* GET Project Page */
router.get('/projects', function(req, res, next) {
  res.render('project');
});

/* GET Contact Page */
router.get('/contact', function(req, res, next) {
  res.render('contact');
});

module.exports = router;
