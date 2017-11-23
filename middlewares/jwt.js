const jwt = require('jsonwebtoken');
const secretKey = require('../config/secret').secret;

module.exports = {
    sign: function (user) {
        return function (req, res, next) {
            const token = jwt.sign(user, secretKey);
            next(token);
        }
    },
    verify: function (token) {
        return function (req, res, next) {
            jwt.verify(token, secretKey, function (e, decode) {
                if(e) throw e;
                res.status(200).send(decode);
            });
        }
    }
}