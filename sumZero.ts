/**
 * Write a function sumZero that takes a sorted array of integers and returns all unique pairs of numbers
 *  whose sum is zero. If no such pairs exist or the input is empty, return false.
 * The function should efficiently find these pairs using the two-pointer approach and return the
 * result as an array of number pairs.
 *
 * exaple
 * sumZero([-5, -2, -1, 0, 1, 2, 5]); -> Output: [ [-5, 5], [-2, 2], [-1, 1] ]
 * sumZero([-3, -1, 0, 2, 4]); -> false
 * sumZero([]); -> false
 * sumZero([-4, -2, 0, 2, 4]); -> [ [-4, 4], [-2, 2] ]
 */
// This is example of multiple pointer pattern
const sumZero = (numbers: number[]): number[][] | false => {
  if (!Array.isArray(numbers) || numbers.length === 0) return false;

  let left = 0;
  let right = numbers.length - 1;
  const result: number[][] = [];

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === 0) {
      result.push([numbers[left], numbers[right]]);
      left++;
      right--;
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }

  return result.length > 0 ? result : false;
};
