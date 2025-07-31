export function moveZeroes(nums: number[]) {
  let left = 0;
  let right = 1;

  if (nums.length < 2) return nums;

  while (right < nums.length) {
    if (nums[left] === 0 && nums[right] !== 0) {
      nums[left] = nums[right];
      nums[right] = 0;
      left++;
      right++;
    } else if (nums[right] === 0 && nums[left] !== 0) {
      left++;
      right = left + 1;
    } else {
      right++;
    }
  }
  return nums;
}
