const otpGenerator = require('otp-generator')

function generateOTP(length) {
  return otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });
}

module.exports = generateOTP;