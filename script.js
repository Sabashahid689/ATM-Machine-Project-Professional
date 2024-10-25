import inquirer from "inquirer";

async function main() { 
    let myBalance = 10000;
    myBalance += 4000;       
    console.log(myBalance);
    
    let myPin = 6793;
    let pinAnswer = await inquirer.prompt([
        {
            name: "pin",
            message: "Enter your PIN",
            type: "input",
        }
    ]);

    if (parseInt(pinAnswer.pin) === myPin) {
        console.log("Correct PIN code!!!");

        let operationAns = await inquirer.prompt([
            {
                name: "operation",
                message: "Please select an option",
                type: "list",
                choices: ["withdraw", "check balance"]
            }
        ]);

        if (operationAns.operation === "withdraw") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    message: "Enter the amount",
                    type: "input",
                }
            ]);

            myBalance -= parseFloat(amountAns.amount);
            console.log("Your remaining balance is: " + myBalance);
        } else if (operationAns.operation === "check balance") {
            console.log("Your balance is: " + myBalance);
        }
    } else {
        console.log("Incorrect PIN number");
    }
}


main();
