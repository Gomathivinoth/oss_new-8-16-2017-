const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
    uri : 'mongodb://localhost:27017/oss1' ,
    secret : crypto,
    db : 'oss1'
}

