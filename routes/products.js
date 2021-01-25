var express = require('express');
var router = express.Router();

var products = [
  {id:1, image:'https://i.imgur.com/PeVoSZ9.jpg', name:'One', brand:'Test Brand', description:'test description'},
  {id:2, image:'https://i.imgur.com/PeVoSZ9.jpg', name:'Two', brand:'Test Brand', description:'test description'},
  {id:3, image:'https://i.imgur.com/PeVoSZ9.jpg', name:'Three', brand:'Test Brand', description:'test description'},
  {id:4, image:'https://i.imgur.com/PeVoSZ9.jpg', name:'Four', brand:'Test Brand', description:'test description'},
  {id:5, image:'https://i.imgur.com/PeVoSZ9.jpg', name:'Five', brand:'Test Brand', description:'test description'},
];


/* GET users listing. */
router.get('/', function(req, res, next) {
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  res.send({product: products[getRandomInt(5)]});
});

module.exports = router;
