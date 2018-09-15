const readline = require('readline');
const { add, substract, divide, multiply, validateNumbers } = require('./operations')

// Use readline to create command line interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Welcome screen message
console.log(`
  Calc.js

  Welcome to the Node.js Calculator app!
  Version: 1.0.0

  Usage: The user will be prompted for two numbers,
  then asked to select their operations of choice.

  Operations: "add()", "substract()", "divide()", "multiply()"
`);

// coding the app
rl.question('Enter the first number: ', (x) => {
  rl.question('Enter the second number: ', (y) => {
    rl.question(`
Please select from the following options:

[1] Addition (+)
[2] Subtraction (-)
[3] Multiplication (*)
[4] Division (/)

Enter your choice: `,
      (choice) => {
        if (!validateNumbers(x, y)) {
          console.log('You can only input numbers! Please restart the program.');
        } else {
          switch (choice) {
            case '1':
              console.log(`The sum of ${x} and ${y} is ${add(x, y)}.`);
              break;
            case '2':
              console.log(`The difference of ${x} and ${y} is ${substract(x, y)}.`);
              break;
              case '3':
                console.log(`The product of ${x} and ${y} is ${multiply(x, y)}.`);
                break;
                case '4':
                  console.log(`The quotient of ${x} and ${y} is ${divide(x, y)}.`);
                  break;
                default:
                  console.log('Please restart the program and select a number between 1 and 4.');
                  break;
          }
        }
        // Close the CLI
        rl.close();
      }
    )
  })
})
