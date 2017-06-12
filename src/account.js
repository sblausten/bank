'use strict';

function Account(id) {
	this.id = id;
	this.balance = 0;
}

Account.prototype = {

	getBalance: function() {
		return this.balance;
	},

	updateBalance: function(ammount) {
		this.balance += ammount;
	}

}

module.exports = Account;
