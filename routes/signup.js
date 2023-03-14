var express = require('express');
var router = express.Router();
const collection = require('mongodb');

/* GET home page. */
router.get('/signup', function (req, res, next) {
  res.render('signup', { title: 'Express' });
});

router.post('/', function (req, res, next) {
  res.render('index', { title: 'Login' });
});

module.exports = router;
