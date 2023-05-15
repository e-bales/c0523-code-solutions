const width = 500;
const height = 600;
const area = width * height;
console.log('My area is', area);
console.log('The type of area is ', typeof area);
const bill = 24.99;
const payment = 30;
const change = payment - bill;
console.log(
  `Your change is ${change} and the type of change is ${typeof change}.`
);
const quizzes = 20;
const midterm = 30;
const final = 40;
const grade = (quizzes + midterm + final) / 3;
console.log(`Your grade is ${grade} and the type of grade is ${typeof grade}.`);
const firstName = 'Eli';
const lastName = 'Bales';
const fullName = firstName + ' ' + lastName;
console.log(
  `My full name is ${fullName} and the type of fullName is ${typeof fullName}.`
);
const pH = 4;
const isAcidic = pH < 7;
console.log(
  `isAcidic is ${isAcidic} and the type of isAcidic is ${typeof isAcidic}.`
);
const headCount = 270;
const isSparta = headCount === 300;
console.log(
  `isSparta is equal to ${isSparta} and the type of isSparta is ${typeof isSparta}.`
);
let motto = fullName;
motto += ' is the GOAT';
console.log(
  `Our motto is ${motto} and the type of our motto is ${typeof motto}.`
);
