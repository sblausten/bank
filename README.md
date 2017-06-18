## Bank app

Basic bank logic built with node that allows you to add, withdraw money and view a statement (in terminal).

## To run:

```bash
node
var Bank = require('./src/bank');
var myBank = new Bank;
myBank.createAccount();
myBank.deposit(0, 500);
myBank.withdraw(0, 200);
myBank.printStatement(0);
```
## To test:

```bash
npm install
grunt test
```

## Issues

- Print statement not printing multiple lines.
- Current final feature test is passing with false positive. 
- Need to expand unit tests to cover refactored account and bank classes. 
- Two pending unit tests that need finishing. 
