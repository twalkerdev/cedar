// Input: nums1 = [1,2,3], nums2 = [2,4,6]
// Output: [[1,3],[4,6]]
import { findDifference } from './find-difference';

describe('findDifference', () => {
  test('should be defined', () => {
    expect(findDifference).toBeTruthy();
  });

  test('should return correct answer for leetcode - 1', () => {
    const nums1 = [1, 2, 3];
    const nums2 = [2, 4, 6];
    const ans = [
      [1, 3],
      [4, 6],
    ];
    expect(findDifference(nums1, nums2)[0]).toEqual(ans[0]);
    expect(findDifference(nums1, nums2)[1]).toEqual(ans[1]);
  });

  test('should return correct answer for leetcode - 2', () => {
    const nums1 = [1, 2, 3, 3];
    const nums2 = [1, 1, 2, 2];
    const ans = [[3], []];
    expect(findDifference(nums1, nums2)[0]).toEqual(ans[0]);
    expect(findDifference(nums1, nums2)[1]).toEqual(ans[1]);
  });

  test('should return correct answer for leetcode - 3', () => {
    const nums1 = [12, -1, -12, 9, -4, 13, 0, -1, -12, 12, 8, -6, 5];
    const nums2 = [7, 4, 1, -8, 2, 1, 7, 2, -7, 9, 0, -11, 1];
    const ans = [
      [-1, -4, -6, 5, 8, -12, 12, 13],
      [1, 2, 4, -7, 7, -8, -11],
    ];
    expect(findDifference(nums1, nums2)[0]).toEqual(ans[0]);
    expect(findDifference(nums1, nums2)[1]).toEqual(ans[1]);
  });
});
