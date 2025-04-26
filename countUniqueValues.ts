/**
 * Given:
A sorted array of numbers (which may include duplicates).

Task:
Write a function countUniqueValues that counts the number of unique values in the array.
The function should run in O(n) time and use O(1) additional space (i.e., solve it in-place without using extra data structures).

examples
countUniqueValues([1, 1, 2, 3, 3, 4, 5]); // Output: 5
countUniqueValues([]);                   // Output: 0
countUniqueValues([7, 7, 7, 7]);         // Output: 1
countUniqueValues([-2, -1, -1, 0, 1]);   // Output: 4
 */

// This is example of multiple pointer pattern
const countUniqueValues = (numbers: number[]): number => {
  if (numbers.length === 0) return 0;

  let i = 0;

  for (let j = 1; j < numbers.length; j++) {
    if (numbers[i] !== numbers[j]) {
      i++;
      numbers[i] = numbers[j];
    }
  }

  return i + 1;
};
