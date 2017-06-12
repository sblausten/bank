
describe('deposit money', function() {
	var account;

	beforeEach( function(){
		account = Account.new;
	})

	it('client can make a deposit to their own account', function(){
		account.deposit(1, 500);
		expect(balance(1)).toEqual(500);
	})
})
