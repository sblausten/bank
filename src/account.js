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
		if (ammount < -this.getBalance()){
			throw new Error('Not enough money in account');
		} else {
			this.balance += ammount;
		}
	}

}

module.exports = Account;
