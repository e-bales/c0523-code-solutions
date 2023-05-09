function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

console.log(
  `The result of converting 10 minutes to seconds is ${convertMinutesToSeconds(
    10
  )}.`
);

function greet(name) {
  return 'Wassssuuuupppp ' + name;
}

console.log(`When I call my friend, they say '${greet('Eli')}'.`);

function getArea(width, height) {
  return width * height;
}

console.log(
  `If a rectangle has a width of 20 and a length of 33, then its area is ${getArea(
    20,
    33
  )}.`
);

function getFirstName(person) {
  return person.firstName;
}

const singer = { firstName: 'Billy', lastName: 'Joel' };
console.log(`That singer's first name is ${getFirstName(singer)}.`);

function getLastElement(array) {
  return array[array.length - 1];
}

const flowers = ['daisy', 'tulip', 'rose', 'sunflower'];
console.log(
  `The last element in my flower's array is ${getLastElement(flowers)}.`
);
