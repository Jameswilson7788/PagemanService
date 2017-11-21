const User = require('../models/user')
module.exports = {
  getUser: function (req, res, next) {
    User.find()
  }
}