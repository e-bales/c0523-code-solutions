const var1 = 10;
const var2 = 12;
const var3 = 5;
const maximumValue = Math.max(var1, var2, var3);
console.log(
  `The max value of ${var1}, ${var2}, and ${var3} is ${maximumValue}.`
);

const heroes = ['Batman', 'Black Canary', 'Captain America', 'Spider-Man'];
let randomNumber = Math.random();
randomNumber *= heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log(`The random index is ${randomIndex}.`);
const randomHero = heroes[randomIndex];
console.log(`Our random hero is ${randomHero}.`);

const library = [
  {
    title: 'Catcher in the Rye',
    author: 'J.D. Salinger',
  },
  {
    title: 'The Poisonwood Bible',
    author: 'Barbara Kingsolver',
  },
  {
    title: 'I, Claudius',
    author: 'Robert Graves',
  },
];

const lastBook = library.pop();
console.log('The last book is: ', lastBook);
const firstBook = library.shift();
console.log('The first book is: ', firstBook);
const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('My library is: ', library);

const fullName = 'Eli Bales';
const firstAndLastName = fullName.split(' ');
console.log('MY first and last name is: ', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('MY FIRST NAME IS: ', sayMyName);
