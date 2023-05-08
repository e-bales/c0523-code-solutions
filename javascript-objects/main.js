const student = { firstName: 'Eli', lastName: 'Bales', age: 24 };
student.fullName = student.firstName + ' ' + student.lastName;
console.log(`My full name is ${student.fullName}`);
student.livesInIrvine = false;
student.previousOccupation = 'student';
console.log(`The statement "I live in Irvine" is ${student.livesInIrvine}.`);
console.log(`Previously, I was a ${student.previousOccupation}.`);

const vehicle = { make: 'Volkswagen', model: 'Beetle', year: 2002 };
vehicle['color'] = 'white';
vehicle['isConvertible'] = false;
console.log(`The vehicle's color is ${vehicle.color}.`);
console.log(
  `The statement "My car is a convertible" is ${vehicle.isConvertible}.`
);
console.log('My vehicle looks like', vehicle);

const pet = { name: 'Mr. Finn', type: 'cat' };
delete pet.name;
delete pet.type;
console.log('My pet looks like', pet);
