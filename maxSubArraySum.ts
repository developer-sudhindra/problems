/**
 * Given an array of integers and a number count, find the maximum sum of any contiguous subarray with exactly
 * count elements. If the array length is smaller than count, return -Infinity. Use an efficient approach
 * to solve the problem with minimal time complexity.
 *
 * examples
 * maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2) -> 10
 * maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4) -> 17
 * maxSubArraySum([4, 2, 1, 6], 1) -> 6
 * maxSubArraySum([4, 2], 3) -> -Infinity
 * maxSubArraySum([-1, -2, -3, -4], 2) -> -3
 *  */

// problem is of type sliding window
const maxSubArraySum = (numbers: number[], count: number): number => {
  // Handle edge case: if the array is smaller than the required count
  if (numbers.length < count) return -Infinity;

  let max = 0;
  let temp = 0;

  // Step 1: Calculate the sum of the first 'count' numbers
  for (let i = 0; i < count; i++) {
    max += numbers[i];
  }

  // Initialize temp with the initial sum
  temp = max;

  // Step 2: Use sliding window technique
  // Subtract the element going out of the window
  // Add the new element coming into the window
  for (let i = count; i < numbers.length; i++) {
    let firstNumber = numbers[i - count];
    let nextNumber = numbers[i];

    temp = temp - firstNumber + nextNumber;

    // Step 3: Update max if the new sum is larger
    max = Math.max(max, temp);
  }

  // Step 4: Return the maximum sum found
  return max;
};
