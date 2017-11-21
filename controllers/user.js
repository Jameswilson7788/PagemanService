const User = require('../models/user');
const _ = require('lodash');

module.exports = {
  getUserById: function (req, res, next) {
    User.find({
      _id: req.params.id
    }, function (e, user) {
      if (e) throw e;
      res.status(200).json(user);
    })
  },
  signup: function (req, res, next) {
    var body = _.pick(req.body, ['name', 'email', 'password']);
    User.findOne({
      email: req.body.email
    }, function (e, email) {
      if (e) throw e;
      if (email) return res.status(401).json({
        msg: '該電子信箱已被註冊'
      });
      const user = new User(body);
      user.save(function (e, user) {
        if (e) throw e;
        res.status(200).json({
          msg: '使用者：' + user.email + '  註冊成功！'
        });
      });
    });
  }
}