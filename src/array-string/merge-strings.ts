// You are given two strings word1 and word2.
// Merge the strings by adding letters in alternating
// order, starting with word1. If a string is longer
// than the other, append the additional letters onto
// the end of the merged string.
//
// Return the merged string.

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"

// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"

// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"
export default function mergeStrings(word1: string, word2: string): string {
  let finalStr = '';

  while (word1.length && word2.length) {
    finalStr += word1[0] + word2[0];
    word1 = word1.substring(1, word1.length);
    word2 = word2.substring(1, word2.length);
  }

  return finalStr + word1 + word2;
}
