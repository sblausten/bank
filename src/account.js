'use strict';

function Account(id) {
	this.id = id;
	this.balance = 0;
	this.log = [];
}

Account.prototype = {

	getBalance: function() {
		return this.balance;
	},

	updateBalance: function(ammount) {
		if (ammount < -this.getBalance()){
			throw new Error('Not enough money in account');
		} else {
			this.balance += ammount;
			//logTransaction(ammount);
		}
	},

	getLog: function() {
		return this.log;
	},

	logTransaction: function(ammount) {
		return;
	}

};

module.exports = Account;
