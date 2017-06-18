var Bank = require('../../src/bank');

describe('bank', function() {

    describe('createAccount', function() {
        var bank;
        var accountStub;

        beforeEach(function() {
            bank = new Bank();
            accountStub = jasmine.createSpy('Account');
        });

        xit('creates new account', function() {
            bank.createAccount();
            expect(accountStub).toHaveBeenCalledWith(0);
        });
    });
});