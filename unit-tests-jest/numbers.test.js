import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

// Unit tests for evenNumbers
describe('evenNumbers', () => {
  it('returns the even numbers of an array', () => {
    const numbers = [1, 4, 5, 10, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0]);
  });
});

describe('evenNumbers', () => {
  it('returns an emtpy array given an empty array', () => {
    const numbers = [];
    const result = evenNumbers(numbers);
    expect(result).toEqual([]);
  });
});

describe('evenNumbers', () => {
  it('returns the even numbers of an array, even if that are strings', () => {
    const numbers = ['1', '2', 4, '5', 7];
    const result = evenNumbers(numbers);
    expect(result).toEqual(['2', 4]);
  });
});

describe('evenNumbers', () => {
  it('returns an error message if not provided an array', () => {
    const numbers = 'A String';
    const result = evenNumbers(numbers);
    expect(result).toEqual('Please provide an array.');
  });
});

// Unit tests for toDollars
describe('toDollars', () => {
  it('returns a dollarified amount', () => {
    const amount = 12;
    const result = toDollars(amount);
    expect(result).toEqual('$12.00');
  });
});

describe('toDollars', () => {
  it('returns the correct dollarified amount given a longer float', () => {
    const amount = 13.442;
    const result = toDollars(amount);
    expect(result).toEqual('$13.44');
  });
});

describe('toDollars', () => {
  it('returns the correct dollarified amount given an amount < $1', () => {
    const amount = 0.56;
    const result = toDollars(amount);
    expect(result).toEqual('$0.56');
  });
});

describe('toDollars', () => {
  it('returns an error message given a string instead of an int/float', () => {
    const amount = 'A String';
    const result = toDollars(amount);
    expect(result).toEqual('Please enter an integer or float.');
  });
});

// Unit tests for divideBy

describe('divideBy', () => {
  it('returns a new array of divided elements', () => {
    const numbers = [2, 6, 12];
    const divisor = 2;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([1, 3, 6]);
  });
});

describe('divideBy', () => {
  it('returns an empty array given an empty array', () => {
    const numbers = [];
    const divisor = 5;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([]);
  });
});

describe('divideBy', () => {
  it('returns an error message if the provided divisor is 0', () => {
    const numbers = [2, 6, 12];
    const divisor = 0;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual('Cannot divide by 0');
  });
});

describe('divideBy', () => {
  it('returns an error message if the provided divisor is not an int/float', () => {
    const numbers = [2, 6, 12];
    const divisor = '2';
    const result = divideBy(numbers, divisor);
    expect(result).toEqual('Please provide only integers or floats.');
  });
});

describe('divideBy', () => {
  it('returns an error message if not provided an array', () => {
    const numbers = '[2, 6, 12]';
    const divisor = 4;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual('Please provide an array.');
  });
});

describe('divideBy', () => {
  it('returns a NEW array, it does not modify the provided array', () => {
    const numbers = [3, 5, 12];
    const deepCopy = numbers.map((x) => x);
    const divisor = 2;
    divideBy(numbers, divisor);
    expect(numbers).toEqual(deepCopy);
  });
});

// Unit tests for multiplyBy

describe('multiplyBy', () => {
  it('returns a modified object where number values are multiplied', () => {
    const object = { a: 1, b: 2, c: 5 };
    const multiplier = 2;
    const result = multiplyBy(object, multiplier);
    expect(result).toEqual({ a: 2, b: 4, c: 10 });
  });
});

describe('multiplyBy', () => {
  it('returns a modified object, and leaves non-number values alone', () => {
    const object = { a: 1, b: '2', c: 5 };
    const multiplier = 2;
    const result = multiplyBy(object, multiplier);
    expect(result).toEqual({ a: 2, b: '2', c: 10 });
  });
});

describe('multiplyBy', () => {
  it('returns a MODIFIED object, not a new object', () => {
    const object = { a: 1, b: '2', c: 5 };
    const multiplier = 2;
    const result = multiplyBy(object, multiplier);
    expect(result).toEqual(object);
  });
});

describe('multiplyBy', () => {
  it('returns an error message if not provided an int or float as a multiplier', () => {
    const object = { a: 1, b: '2', c: 5 };
    const multiplier = '2';
    const result = multiplyBy(object, multiplier);
    expect(result).toEqual(
      'Please provide an integer or float for a multiplier.'
    );
  });
});

describe('multiplyBy', () => {
  it('returns an emtpy object if provided an empty object', () => {
    const object = {};
    const multiplier = 2;
    const result = multiplyBy(object, multiplier);
    expect(result).toEqual({});
  });
});
