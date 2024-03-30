import inquirer from "inquirer";
console.log("Welcome to the ATM");
console.log("Please insert your card and enter your pin number");
let myBalance = 15000; //Dollar
let myPin = 20884;
let pinAnswer = await inquirer.prompt([{
        name: "pin",
        message: "enter your pin ",
        type: "number",
    }]);
if (pinAnswer.pin === myPin) {
    console.log("Hello Maham!");
    let operationAns = await inquirer.prompt([{
            name: "operation",
            message: "please select one of the below option",
            type: "list",
            choices: ["balance inquiry", "cash withdraw", "fund transfer", "utility bill payment"]
        }]);
    if (operationAns.operation === "balance inquiry") {
        let message = `Your balance is: ${myBalance}`;
        console.log(message);
    }
    else if (operationAns.operation === "cash withdraw") {
        let amountAns = await inquirer.prompt([{
                name: "amount",
                message: "please enter your amount",
                type: "number",
            }
        ]);
        myBalance -= amountAns.amount;
        console.log(`Your remaining balance is: ${myBalance}`);
    }
    else if (operationAns.operation === "fund transfer") {
        let mahamAccount = 20193000;
        let irfanAccount = 47300921;
        let transferAns = await inquirer.prompt([{
                name: "transfer",
                message: "please enter recipient account number",
                type: "number",
            }
        ]);
        let transferAmount = await inquirer.prompt([{
                name: "transfer",
                message: "please enter your amount",
                type: "number",
            }
        ]);
        let message = (`Recipient account number: 47300921`);
        let message1 = (`Recipient account title: Irfan`);
        let message2 = (`Amount: ${transferAmount.transfer}`);
        console.log(message);
        console.log(message1);
        console.log(message2);
        myBalance -= transferAmount.transfer;
        console.log("Transaction has been completed");
        console.log(`Your remaining balance is: ${myBalance}`);
    }
    else if (operationAns.operation === "utility bill payment") {
        let consumerNumber = 39864421095463;
        let billPaymentAns = await inquirer.prompt([{
                name: "billpayment",
                message: "please select one of the option: ",
                type: "list",
                choices: ["k.e", "s.s.g.c"],
            },
        ]);
        let billAmount = 650;
        let billPayAns = await inquirer.prompt([{
                name: "payment",
                message: "please enter consumer number: ",
                type: "number",
            },
        ]);
        let message = (`Customer name: Maham`);
        let message1 = (`Bill amount: 650`);
        let message2 = (`Status: unpaid`);
        let message3 = (`Late payment charges: 0.00`);
        console.log(message);
        console.log(message1);
        console.log(message2);
        console.log(message3);
        console.log("Your bill has been paid");
        myBalance -= billAmount;
        console.log(`Your remaining balance is ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin number");
}
;
