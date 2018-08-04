var express = require('express');
var router = express.Router();

var categoryService = require('../src/service/categoryService.js');

/* GET category listing. */
router.get('/', function (req, res, next) {
  let id = !!req.query.id ? req.query.id : '';
  let name = !!req.query.name ? req.query.name : '';
  console.log('id:', id + ',name:', name);

  categoryService.getAll(id, name, (result) => {
    res.send(JSON.stringify(result));
  });
})

router.get('/add', function (req, res, next) {
  let name = !!req.query.name ? req.query.name : '';
  console.log('name:', name);

  categoryService.add(name, (result) => {
    res.send(JSON.stringify(result));
  });
})

router.get('/update', function (req, res, next) {
  let id = !!req.query.id ? req.query.id : '';
  let name = !!req.query.name ? req.query.name : '';
  console.log('id:', id + ',name:', name);

  categoryService.update(id, name, (result) => {
    res.send(JSON.stringify(result));
  });
})

router.get('/delete', function (req, res, next) {
  let id = !!req.query.id ? req.query.id : '';
  console.log('id:', id);

  categoryService.delete(id, (result) => {
    res.send(JSON.stringify(result));
  });
})

module.exports = router;
