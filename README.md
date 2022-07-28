# Bank tech test
Completing a simple 'bank tech test' (with the requirements found below).  The program can make Desposits, Withdrawals and Display the users statement of balance on the REPL.

### Requirements

* You should be able to interact with your code via a REPL like IRB or Node.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

## Undertaking
A node.js bank account app which runs in the terminal, can do the following:
- make a deposit
- make a withdrawal
- print a bank statement to terminal

### Technologies Used
- Node - backend
- Jest - unit and integration testing

### How to Run the App

Program can be run within NODE REPL.

```
node 
const BankAcc = require('./account.js');
const Statement = require("./statement");

const account = new BankAcc();
let statement = new Statement(account.showTranscations());

account.deposit(500);
account.withdraw(100);
account.withdraw(200);
console.log(account.showTranscations())
console.log(statement.printStatement())
```

Run tests

```
jest
```
### Screenshot
![terminal Screenshot](./assets/terminal_screensho.pngg)
