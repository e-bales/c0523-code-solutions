function ExampleConstructor() {}

console.log(
  "ExampleConstructor's prototype is: ",
  ExampleConstructor.prototype
);
console.log(
  " The type of ExampleConstructor's prototype is: ",
  typeof ExampleConstructor.prototype
);

const construct = new ExampleConstructor();
console.log('Calling new on ExampleConstructor produces: ', construct);
console.log('The type of the above variable is: ', typeof construct);
console.log(
  'The statement "construct is an instance of ExampleConstructor" is: ',
  construct instanceof ExampleConstructor
);
