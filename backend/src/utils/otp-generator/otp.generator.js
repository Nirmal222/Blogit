const cryptoRandomString = require('crypto-random-string');

function generateOTP(length) {
  return cryptoRandomString({ length, type: 'numeric' });
}

module.exports = generateOTP;