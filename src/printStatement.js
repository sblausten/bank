
var print = function (account) {
	console.log(headers());
	logs(account);
};

var logs = function(account) {
	for (var i = 0; account.getLog().length < i; i++) {
		console.log(formatLogLine(account.getLog()[i]));
	}
};

var formatLogLine = function(logLineArray) {
	return logLineArray.join(' || ');
};

var headers = function() {
	return "date || credit || debit || balance";
};

module.exports = print;
