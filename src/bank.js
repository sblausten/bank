'use strict';
var Account = require('./account');

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

	checkBalance: function(accountId) {
		return this.getAccount(accountId).getBalance();
	},

	getAccount: function(accountId) {
		return this.getAccounts()[accountId];
	}

};

module.exports = Bank;
