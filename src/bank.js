'use strict';
var Account = require('./account');
var print = require('./printStatement');
var printer;

function Bank() {
    this._accounts = [];
    this._nextAccountId = 0;
}

Bank.prototype = {
	createAccount: function() {
	    var account = new Account(this.getNextAccountId());
	    this.updateAccounts(account);
	},

	countAccounts: function() {
	    return this.getAccounts().length;
	},

	getAccounts: function() {
	    return this._accounts;
	},

	updateAccounts: function(newAccount) {
	    this._accounts.push(newAccount);
	    this.incrementNextAccountId();
	},

	incrementNextAccountId: function() {
		this._nextAccountId ++;
	},

	getNextAccountId: function() {
		return this._nextAccountId;
	},

	deposit: function(accountId, ammount) {
		this.getAccount(accountId).updateBalance(ammount);
	},

	withdraw: function(accountId, ammount) {
		try {
			this.getAccount(accountId).updateBalance(ammount);
		} catch(err) {
			throw err;
		}
	},

	checkBalance: function(accountId) {
		return this.getAccount(accountId).getBalance();
	},

	printStatement: function(accountId) {
		print(this.getAccount(accountId));
	},

	getAccount: function(accountId) {
		return this.getAccounts()[accountId];
	}

};

module.exports = Bank;
