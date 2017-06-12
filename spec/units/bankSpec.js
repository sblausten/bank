var Bank = require('../../src/bank');

describe('bank', function() {

    describe('createAccount', function() {
        var bank;

        beforeEach(function() {
            bank = new Bank;
            spyOn(bank, 'Account');
        });

        xit('creates new account', function() {
            bank.createAccount();
            expect(Account).toHaveBeenCalledWith(0);
        });
    });
});