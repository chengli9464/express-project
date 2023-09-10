const path = require('path')
const express = require('express');

const router = express.Router();

let goods =require('../public/data/goods')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/goods',function(req,res,next){
  res.send(goods)
})

// 删除商品
router.post('/deleteGoods',function(req,res,next){
  goods = goods.filter((element) =>{
    return element.id !== req.body.id
  })
  res.send(goods)
})

//添加商品
router.post('/addGoods',function(req,res,next){
  const {
    url,
    name,
    price,
    inventory,
    sales
  } = req.body
  goods.push({
    id: new Date().getTime().toString(),
    url,
    name,
    price,
    inventory,
    sales
  })
  res.send(goods)
})

// 编辑商品
router.post('/editGoods',function(req,res,next){
  const {
    id,
    url,
    name,
    price,
    inventory,
    sales
  } = req.body
  const foundIndex = goods.findIndex((element => element.id === id))
  goods.splice(foundIndex,1,{id,url,name,price,inventory,sales})
  console.log(goods);
  res.send(goods)
})

router.get('/image',function(req,res,next){
  res.send({url:path.join(__dirname,'../public/images/head/01.jpg')})
})

module.exports = router;
