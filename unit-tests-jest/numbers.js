/**
 * Returns a new array that contains only the even numbers in the given array.
 */
export function evenNumbers(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error('Please provide an array.');
  }
  return numbers.filter((n) => n % 2 === 0);
}

/**
 * Returns a number formatted in dollars and cents.
 * It works for both integer and fractional numbers.
 * That is, `toDollars(12)` returns `$12.00` and
 * `toDollars(11.341)` returns `$11.34`.
 */
export function toDollars(amount) {
  if (Number.isNaN(Number(amount))) {
    throw new Error('Please enter an integer or float.');
  }
  if (Number.isInteger(amount)) {
    return `$${amount}.00`;
  } else {
    return `$${amount.toFixed(2)}`;
  }
}

/**
 * Returns a new array of numbers where every entry has been divided by the
 * given divisor. Does not modify the original array.
 * @param {Array} numbers The array of numbers to be divided by the divisor.
 * @param {number} divisor The number to divide into each element of `numbers`.
 * @returns a new array.
 */
export function divideBy(numbers, divisor) {
  if (divisor === 0) {
    throw new Error('Cannot divide by 0');
  }
  if (typeof divisor !== 'number') {
    throw new Error('Please provide only integers or floats.');
  }
  if (!Array.isArray(numbers)) {
    throw new Error('Please provide an array.');
  }
  return numbers.map((x) => x / divisor);
}

/**
 * Modifies an object by multiplying the value of each key, but only if that
 * value is a number. Key names are arbitrary.
 * @param {Object} obj The object to modify.
 * @param {number} multiplier The number to multiply by.
 * @returns the input object.
 */
export function multiplyBy(obj, multiplier) {
  if (typeof multiplier !== 'number') {
    throw new Error('Please provide an integer or float for a multiplier.');
  }
  Object.entries(obj).forEach(([key, value]) => {
    if (typeof obj[key] === 'number') {
      obj[key] = value * multiplier;
    }
  });
  return obj;
}
