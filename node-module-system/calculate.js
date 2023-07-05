import add from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import divide from './divide.js';

const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[4]);
const operation = process.argv[3];

switch (operation) {
  case 'plus':
    console.log('result: ', add(num1, num2));
    break;
  case 'minus':
    console.log('result: ', subtract(num1, num2));
    break;
  case 'times':
    console.log('result: ', multiply(num1, num2));
    break;
  case 'over':
    console.log('result: ', divide(num1, num2));
    break;
  default:
    console.log('Invalid Operation');
}
