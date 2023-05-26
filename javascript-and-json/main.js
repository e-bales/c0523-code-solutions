const bookArray = [
  {
    isbn: '1001001',
    title: 'Percy Jackson',
    author: 'Rick Riordan',
  },
  {
    isbn: '1001002',
    title: 'Harry Potter',
    author: 'J.K. Rowling',
  },
  {
    isbn: '1001003',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
  },
];
console.log('Book Array: ', bookArray);
console.log('typeof Book Array is: ', typeof bookArray);

const bookString = JSON.stringify(bookArray);
console.log('Book String: ', bookString);
console.log('typeof Book String is: ', typeof bookString);

const student = '{"id": 10, "name": "Ben Tennyson"}';
console.log('Student:', student);
console.log('typeof Student', typeof student);

const parsedStudent = JSON.parse(student);
console.log('parsedStudent: ', parsedStudent);
console.log('typeof parsedStudent: ', typeof parsedStudent);
