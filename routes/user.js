var express = require('express');
var router = express.Router();

var userService = require('../src/service/userService.js');

/* GET user listing. */
router.get('/', function (req, res, next) {
  let id = !!req.query.id ? req.query.id : '';
  let name = !!req.query.name ? req.query.name : '';
  let email = !!req.query.email ? req.query.email : '';
  console.log('id:', id + ',name:', name + ',email:', email);

  userService.getAll(id, name, email, (result) => {
    res.send(JSON.stringify(result));
  });
})

router.get('/add', function (req, res, next) {
  let name = !!req.query.name ? req.query.name : '';
  let password = !!req.query.password ? req.query.password : '';
  let email = !!req.query.email ? req.query.email : '';
  console.log('name:', name + ',password:', password + ',email:', email);
  
  userService.add(name, password, email, (result) => {
    res.send(JSON.stringify(result));
  });
})

router.get('/update', function (req, res, next) {
  let id = !!req.query.id ? req.query.id : '';
  let name = !!req.query.name ? req.query.name : '';
  let password = !!req.query.password ? req.query.password : '';
  let email = !!req.query.email ? req.query.email : '';
  console.log('name:', name + ',password:', password + ',email:', email);
  
  userService.update(id, name, password, email, (result) => {
    res.send(JSON.stringify(result));
  });
})

router.get('/delete', function (req, res, next) {
  let id = !!req.query.id ? req.query.id : '';
  console.log('id:', id);
  
  userService.delete(id, (result) => {
    res.send(JSON.stringify(result));
  });
})

module.exports = router;
