var Bank = require('../../src/bank');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

describe('statement', function() {
    var bank;
    var date;

    beforeEach(function() {
        bank = new Bank();
        bank.createAccount();
        date = new Date();
        bank.deposit(0, 1000);
        bank.deposit(0, 2000);
        bank.withdraw(0, -500);
    });

    it('client can print their statement', function() {
        bank.printStatement(0);
        rl.on("line", function(line) {
            expect(line).toEqual("date || credit || debit || balance");      	
        });
        rl.on("line", function(line) {
        	expect(line).toEqual(date + " || || 500.00 || 2500.00");
        });
        rl.on("line", function(line) {
        	expect(line).toEqual(date + " || 2000.00 || || 3000.00");
        });
        rl.on("line", function(line) {
        	expect(line).toEqual(date + " || 1000.00 || || 1000.00");
    	});
    });
    it('client cannot withdraw more money than is in the account', function() {
        expect(function() {
            bank.withdraw(0, -2600);
        }).toThrow();
    });
});