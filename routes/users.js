const express = require('express');
const router = express.Router();
const _ = require('lodash');
const User = require('../models/user');
/* GET users listing. */
router.post('/signup', function (req, res, next) {
  var body = _.pick(req.body, ['name', 'email', 'password']);
  User.find({
    email: body.email
  }, function (e, email) {
    if (e) throw e;
    if (email) return res.status(401).json({
      msg: '該電子信箱已被註冊'
    });
    const user = new User(body);
    user.save(function (e, user) {
      if(e) throw e;
      res.status(200).json('使用者：' + user.email + '  註冊成功！'); 
    });
  });
});

module.exports = router;