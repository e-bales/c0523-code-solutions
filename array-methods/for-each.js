const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

console.log('In order:');
values.forEach((e) => console.log(e));

console.log('Reverse order:');
values.forEach((e) =>
  console.log(values[values.length - 1 - values.indexOf(e)])
);
