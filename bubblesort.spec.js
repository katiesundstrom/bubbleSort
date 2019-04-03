describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it('handles a single item', function() {
    expect(bubbleSort([1])).toEqual([1]);
  });
  it('handles multiple items', function() {
    expect(bubbleSort([5, 3, 9, 1])).toEqual([1, 3, 5, 9]);
  });
});

describe('Swap helper function', function() {
  beforeAll(function() {
    spyOn(window, 'swap').and.callThrough();
  });
  it("calls 'swap' the correct number of times", function() {
    bubbleSort([8, 2, 11]);
    expect(window.swap.calls.count()).toEqual(1);
  });
});
