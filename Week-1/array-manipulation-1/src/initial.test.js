/* global expect, banMethods, initial */

describe('initial(array)', function () {
  beforeEach(function () {
    expect(initial).to.be.a('function');
    banMethods(initial, 'splice', 'slice');
  });

  it('returns the first two values of ["foo", "bar", "baz"]', function () {
    const input = ['foo', 'bar', 'baz'];
    const output = initial(input);
    expect(output).to.deep.equal(['foo', 'bar']);
  });

  it('returns the first five values of [1, 2, 3, 4, 5, 6]', function () {
    const input = [1, 2, 3, 4, 5, 6];
    const output = initial(input);
    expect(output).to.deep.equal([1, 2, 3, 4, 5]);
  });

  it('returns the first three values of [true, false, false, true]', function () {
    const input = [true, false, false, true];
    const output = initial(input);
    expect(output).to.deep.equal([true, false, false]);
  });

  it('returns [] (empty array) for []', function () {
    const input = [];
    const output = initial(input);
    expect(output).to.deep.equal([]);
  });
});
