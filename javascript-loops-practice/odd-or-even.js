/* exported oddOrEven */
function oddOrEven(numbers) {
  const array = [];
  for (let i = 0; i < numbers.length; i++) {
    array.push(numbers[i] % 2 === 0 ? 'even' : 'odd');
  }
  return array;
}
