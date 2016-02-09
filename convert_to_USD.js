var numAsUSD = function(number){
    number = parseInt(number);
    number = number.toLocaleString();

    return '$' + number;
}

module.exports = numAsUSD;
