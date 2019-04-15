describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1, 2, 3, 4])).toEqual([[1, 2], [3, 4]]);
  });
  it('is able split an array into two halves with an odd number of items', function() {
    expect(split([1, 2, 3, 4, 5]).length).toBe(2);
  });
  it('is able to split an array of characters', function() {
    expect(split(['a', 'b', 'c', 'd'])).toEqual([['a', 'b'], ['c', 'd']]);
  });
});
describe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    // expect(merge([], []).length).toBe(1);
    expect(merge([4, 5], [1, 2])).toEqual([1, 2, 4, 5]);
  });
  it('is able to merge two arrays of sorted characters', function() {
    expect(merge(['c', 'd'], ['a', 'b'])).toEqual(['a', 'b', 'c', 'd']);
  });
  it('is able to merge two arrays with an uneven number of elements', function() {
    expect(merge(['d', 'e'], ['a', 'b', 'c'])).toEqual([
      'a',
      'b',
      'c',
      'd',
      'e',
    ]);
  });
  it('is able to merge two arrays with an uneven number of elements', function() {
    expect(merge(['a', 'e'], ['b', 'c', 'f'])).toEqual([
      'a',
      'b',
      'c',
      'e',
      'f',
    ]);
  });
});
describe('MergeSort function', function() {
  it('is able to ', function() {
    expect(mergeSort([3, 6, 8, 2, 1])).toEqual([1, 2, 3, 6, 8]);
  });
});
