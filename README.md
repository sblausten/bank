## Bank logic

Basic bank logic built with node that allows you to add, withdraw money and view a statement (in terminal).

## To run:

```bash
node
var Bank = require('./src/bank');
var myBank = new Bank;
myBank.createAccount();
myBank.deposit(0, 500);
myBank.withraw(0, 200);
myBank.printStatement(0);
```
