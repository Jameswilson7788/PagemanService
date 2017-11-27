const Pageman = require('../models/pageman');
const _ = require('lodash');
module.exports = {
  
  submit: function (req, res, next) {
    const body = _.pick(req.body,['title', 'body']);
    const pageman = new Pageman(body);
    
  }
}