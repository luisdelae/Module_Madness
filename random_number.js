var randomNumber = function(min, max) {
    var ourNumber = (Math.floor(Math.random() * (1 + max - min) + min));

    ourNumber = ourNumber.toString();

    return ourNumber;
}

module.exports = randomNumber;