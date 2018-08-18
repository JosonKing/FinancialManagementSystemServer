var express = require('express');
var router = express.Router();
var _ = require('lodash');
var util = require('util');

var userService = require('../src/service/userService.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("Cookies: " + util.inspect(req.cookies));
  res.render('index', { title: '302 财务管理系统' });
});

router.get('/login', function (req, res, next) {
  let id = '';
  let name = !!req.query.name ? req.query.name : '';
  let password = !!req.query.password ? req.query.password : '';
  let email = '';
  console.log('name:', name + ',password:', password);

  let userInfo = {};
  userService.getAll(id, name, email, (result) => {
    userInfo = result;
    console.log('userInfo:', userInfo);
    // console.log('password, userInfo.password, password == userInfo.passwrod:', password, userInfo.password, password == userInfo.passwrod)
    if (true) {
      res.send(JSON.stringify({
        code: '0',
        message: 'ok'
      }));
    }
    res.send(JSON.stringify({
      code: '1',
      message: 'error'
    }));
  });
});

module.exports = router;
