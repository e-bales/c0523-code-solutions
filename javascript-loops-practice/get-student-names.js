/* exported getStudentNames */
function getStudentNames(students) {
  const array = [];
  for (const person of students) {
    console.log(person);
    array.push(person.name);
  }
  return array;
}
