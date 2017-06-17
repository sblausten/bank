var Bank = require('../../src/bank');

describe('deposit money', function() {
	var bank;

	beforeEach( function(){
		bank = new Bank();
		bank.createAccount();
	});

	it('client can make a deposit to their own account', function(){
		bank.deposit(0, 500);
		expect(bank.checkBalance(0)).toEqual(500);
	});
});
