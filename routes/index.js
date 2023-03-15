var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Login' });
});
router.post('/home', function (req, res, next) {
  res.render('home', { title: 'Home' });
});

module.exports = router;
