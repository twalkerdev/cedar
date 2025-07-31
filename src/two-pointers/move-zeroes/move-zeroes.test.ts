import moveZeroes from './move-zeroes';

describe.skip('moveZeroes', () => {
  test('should be defined', () => {
    expect(moveZeroes).toBeTruthy();
  });

  test('should pass first leetcode test', () => {
    const nums = [0, 1, 0, 3, 12];
    const res = moveZeroes(nums);
    expect(res).toEqual([1, 3, 12, 0, 0]);
  });

  test('should pass second leetcode test', () => {
    const nums = [0];
    const res = moveZeroes(nums);
    expect(res).toEqual([0]);
  });

  test('should pass third leetcode test', () => {
    const nums = [2, 1];
    const res = moveZeroes(nums);
    expect(res).toEqual([2, 1]);
  });
});
