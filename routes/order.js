var express = require('express');
var router = express.Router();

var orderService = require('../src/service/orderService.js');
var userService = require('../src/service/userService.js');
var categoryService = require('../src/service/categoryService.js');

/* GET order listing. */
router.get('/', function (req, res, next) {
  let id = !!req.query.id ? req.query.id : '';
  let userId = !!req.query.userId ? req.query.userId : '';
  let categoryId = !!req.query.categoryId ? req.query.categoryId : '';
  let time = !!req.query.time ? req.query.time : '';
  console.log('id:', id + ',userId:', userId + ',categoryId:', categoryId + ',time:', time);

  orderService.getAll(id, userId, categoryId, time, (result) => {
    res.send(JSON.stringify(result));
  });
})

router.get('/add', function (req, res, next) {
  console.log('req.query.time:', req.query.time);
  let userId = !!req.query.userId ? req.query.userId : '';
  let amount = !!req.query.amount ? req.query.amount : '';
  let categoryId = !!req.query.categoryId ? req.query.categoryId : '';
  let time = !!req.query.time ? req.query.time : '';
  console.log('userId:', userId + ',amount:', amount + ',categoryId:', categoryId + ',time:', time);

  orderService.add(userId, amount, categoryId, time, (result) => {
    res.send(JSON.stringify(result));
  });
})

router.get('/update', function (req, res, next) {
  let id = !!req.query.id ? req.query.id : '';
  let userId = !!req.query.userId ? req.query.userId : '';
  let amount = !!req.query.amount ? req.query.amount : '';
  let categoryId = !!req.query.categoryId ? req.query.categoryId : '';
  let time = !!req.query.time ? req.query.time : '';
  console.log('id:', id + ',userId:', userId + ',amount:', amount + ',categoryId:', categoryId + ',time:', time);

  orderService.update(id, userId, amount, categoryId, time, (result) => {
    res.send(JSON.stringify(result));
  });
})

router.get('/delete', function (req, res, next) {
  let id = !!req.query.id ? req.query.id : '';
  console.log('id:', id);

  orderService.delete(id, (result) => {
    res.send(JSON.stringify(result));
  });
})

module.exports = router;
