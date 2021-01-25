var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
    var obj = {
      name: "rizky"
    };
    res.json(obj);
});

module.exports = router;
