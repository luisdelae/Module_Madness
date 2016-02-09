var http = require('http');
var accountBalance = require('./account_balance.js');

http.createServer(function(req, res) {
    res.writeHead(200);
    res.write(accountBalance.accountBalance() + accountBalance.numConverted());
    res.end();
}).listen(3000);