/**
 * rite a function isSubsequence that takes in two strings, str1 and str2, 
 * and determines whether the characters in str1 appear in the same order (but not necessarily consecutively)
 *  within str2.
In other words, check if str1 is a subsequence of str2.
 */

// console.log(isSubsequence("sing", "string")); // true
// console.log(isSubsequence("abc", "abracadabra")); // true
// console.log(isSubsequence("abc", "acb")); // false

const isSubsequence = (str1: string, str2: string) => {
  let i = 0;
  let j = 0;
  while (j < str2.length) {
    if (str1[i] === str2[j]) {
      i++;
    }
    if (i === str1.length) return true;
    j++;
  }
  return i === str1.length;
};
