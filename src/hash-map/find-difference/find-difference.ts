// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.

// OPTIMUM SOLUTION:
// export function findDifference(nums1, nums2) {
// let set1 = new Set(nums1);
// let set2 = new Set(nums2);
// let ans1 = [...set1].filter( x => !set2.has(x))
// let ans2 = [...set2].filter( x => !set1.has(x))
// return [ans1,ans2];
// }

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
export function findDifference(nums1, nums2) {
  const hash1 = {};
  nums1.map((num) => {
    if (hash1[`${num}`] !== num) {
      hash1[`${num}`] = num;
    }
  });
  const hash2 = {};
  nums2.map((num) => {
    if (hash2[`${num}`] !== num) {
      hash2[`${num}`] = num;
    }
  });

  const ans1 = [];
  for (const num in hash1) {
    if (hash2[`${num}`] === undefined) {
      ans1.push(hash1[`${num}`]);
    }
  }

  const ans2 = [];
  for (const num in hash2) {
    if (hash1[`${num}`] === undefined) {
      ans2.push(hash2[`${num}`]);
    }
  }

  return [ans1, ans2];
}
