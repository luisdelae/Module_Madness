var randomNumber = require('./random_number.js');
var convertToUSD = require('./convert_to_USD.js');

var numConverted = function() {
    return convertToUSD(randomNumber(100, 1000000)) + '\n';
}

var accountBalance = function() {
    return 'Account balance: \n';
}

exports.numConverted = numConverted;
exports.accountBalance = accountBalance;