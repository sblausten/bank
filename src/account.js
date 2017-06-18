'use strict';

module.exports = Account;

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
			this.updateLog(this.createLog(ammount));
		}
	},

	getLog: function() {
		return this.log;
	},

	updateLog: function(log) {
		this.getLog().push(log);
	},

	checkDebitOrCredit: function(ammount){
		var credit, debit;
		0 < ammount ? credit = ammount : debit = ammount;
		return { debit: debit, credit: credit};
	},

	getDate: function() {
		return new Date();
	},

	createLog: function(ammount) {
		var transaction = this.checkDebitOrCredit(ammount);
		return { 
			date: this.getDate(), 
			credit: transaction.credit,
			debit: transaction.debit,
			balance: this.getBalance()
		};
	}
};

