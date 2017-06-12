var Bank = require('../../src/bank');

describe('withdraw money', function() {
	var bank;

	beforeEach( function(){
		bank = new Bank;
		bank.createAccount();
		bank.deposit(0, 501)
	});

	it('client can withdraw money from their own account', function(){
		bank.withdraw(0, -500);
		expect(bank.checkBalance(0)).toEqual(1);
	});
	it('client cannot withdraw more money than is in the account', function(){
		expect(function() {
			bank.withdraw(0, -600);
		}).toThrow();
	});
});