const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const num1 = Number(process.argv[2]);
const operation = process.argv[3];
const num2 = Number(process.argv[4]);

if (operation === 'plus') {
  console.log('result:', add(num1, num2));
} else if (operation === 'minus') {
  console.log('results:', subtract(num1, num2));
} else if (operation === 'times') {
  console.log('results:', multiply(num1, num2));
} else if (operation === 'over') {
  console.log('results:', divide(num1, num2));
}
