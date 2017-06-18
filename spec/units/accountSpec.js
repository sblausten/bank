var Account = require('../../src/account');

describe('account', function() {

    describe('updateBalance', function() {
        var account;
        beforeEach(function() {
            account = new Account(0);
        });

        it('adds to balance', function() {
            account.updateBalance(20);
            expect(account.getBalance()).toEqual(20);
        });
        it('subtracts from balance', function() {
            account.updateBalance(25);
            account.updateBalance(-20);
            expect(account.getBalance()).toEqual(5);
        });
    });
    describe('updateLog', function() {
        var account, log;
        beforeEach( function() {
            account = new Account(0);
            log = { mockObject: " " };
        });
        it('pushes new log to log array', function() {
            var length = account.getLog().length + 1;
            account.updateLog(log);
            expect(account.getLog().length).toEqual(length);
        });
    });
    describe('createLog', function() {
        var account, ammount, transaction, log;
        beforeEach( function() {
            account = new Account(0);
            transaction = { debit: 10, credit: 0};
            resultLog = {
                date: new Date(),
                credit: 0,
                debit: 10,
                balance: 10
            };
            spyOn(account, 'checkDebitOrCredit').and.returnValue(transaction);
            spyOn(account, 'getBalance').and.returnValue(10);
        });
        xit('returns a hash with date, credit, debit and balance', function() {
            console.log(account.checkDebitOrCredit(10));
            ammount = 20;
            expect(account.createLog(ammount)).toEqual(resultLog);
        });
    });
});