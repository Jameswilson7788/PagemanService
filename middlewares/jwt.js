const jwt = require('jsonwebtoken');
const secretKey = require('../config/secret').secret;
module.exports = function (user) {
    return function (req, res, next) {
        const token = jwt.sign(user, secretKey);
        next(token);
    }
}