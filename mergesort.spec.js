describe('Split Array function', function () {
  it('expects split to return an array', function () {
    expect(Array.isArray(split([1, 2, 3, 4]))).toEqual(true);
  });
  it('handles an Array length 0', function () {
    expect(split([])).toEqual([]);
  });
  it('handles an Array length 1', function () {
    expect(split([1])).toEqual([1]);
  });
  it('returns an array split in half', function () {
    expect(split([1, 2, 3, 4])).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });
  it('handles odd length arrays', function () {
    expect(split([1, 2, 3, 4, 5])).toEqual([
      [1, 2],
      [3, 4, 5],
    ]);
  });
});

describe('Merge function', function () {
  it('is able to merge two sorted arrays into one sorted array', function () {
    expect(Array.isArray(merge([1, 2, 3, 4], [3, 7, 8]))).toEqual(true);
  });
  it('handles an array of length 1 or 0', function () {
    expect(merge([13], [])).toEqual([13]);
  });
  it('handles merging of array', function () {
    expect(merge([1, 4, 7], [-1, 6, 7])).toEqual([-1, 1, 4, 6, 7, 7]);
  });
});
