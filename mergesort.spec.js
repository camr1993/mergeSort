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
