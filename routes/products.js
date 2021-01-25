var express = require('express');
var router = express.Router();

var products = [
  {id:1, image:'https://i.imgur.com/PeVoSZ9.jpg', name:'Tarte Bb Cream and Fenty Beauty Liquid Foundation', brand:'Great Brand', description:'Tarte Bb Cream and Fenty Beauty Liquid Foundation'},
  {id:2, image:'https://i.imgur.com/PeVoSZ9.jpg', name:'Sephora Rewards Bazaar gift (2000 pts)', brand:'Advance Brand', description:'Living Proof frizz intense moisture mask full size, wine glass holder, Popchose dry brush, La Jolie muse lavender candle, and AmazeFan bath pillow! Cat for scale.'},
  {id:3, image:'https://i.imgur.com/PeVoSZ9.jpg', name:'Bizarre brand collab??!!', brand:'New Brand', description:'Bizarre brand collab??!!'},
  {id:4, image:'https://i.imgur.com/PeVoSZ9.jpg', name:'Sephora haul', brand:'New Brand', description:'Sephora haul'},
  {id:5, image:'https://i.imgur.com/PeVoSZ9.jpg', name:'Sephora haul Five #eveline', brand:'Test Brand', description:'#balea #makeuprevolution #sephora #krauterhof #eveline'},
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  res.send({product: products[getRandomInt(5)]});
});

module.exports = router;
