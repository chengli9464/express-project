const express = require('express');
const router = express.Router();
const goods =require('../public/data/goods')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/goods',function(req,res,next){
  res.send(goods)
})

module.exports = router;
