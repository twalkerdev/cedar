// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

// Example 1:

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Example 2:

// Input: nums = [5], k = 1
// Output: 5.00000
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export function findMaxAverage(nums: number[], k: number) {
  // let curSum = nums.reduce((acc, cur) => acc + cur, 0);
  // let curAvg = curSum / nums.length;
  // let maxAvg = -Infinity;

  // if (nums.length <= 2 || k >= nums.length) {
  //   return Math.max(curAvg, maxAvg);
  // }

  // for (let i = 0, j = k - 1; j < nums.length; i++, j++) {
  //   curSum = nums.slice(i, j + 1).reduce((acc, cur) => acc + cur, 0);
  //   curAvg = curSum / k;
  //   maxAvg = Math.max(curAvg, maxAvg);
  // }

  // return maxAvg;

  let maxSum = -Infinity;
  let curSum = 0;
  let start = 0;

  for (let end = 0; end < nums.length; end++) {
    curSum += nums[end];

    if (end - start === k - 1) {
      const avg = curSum / k;
      maxSum = Math.max(maxSum, avg);
      curSum -= nums[start];
      start++;
    }
  }

  return maxSum.toFixed(5);
}
