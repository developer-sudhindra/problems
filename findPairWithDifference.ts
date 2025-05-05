/**
 * Given an array of integers and a target value, determine whether there
 * exists a pair of distinct elements in the array whose absolute difference is equal to the target value.
 * ex:
 * findPair([10, 3, 6, 9], 3) -> true
 * findPair([1, 5, 3, 7], 2) -> true
 * findPair([1, 5, 3, 7], 22) -> false
 */

/**
 * This function checks whether there exist two distinct elements in the
 * `values` array such that the absolute difference between them is equal to
 * the given `value`. The function uses a Set to track the previously
 * encountered numbers for efficient lookups.
 *
 * @param values - An array of integers.
 * @param value - The target absolute difference to check for.
 * @returns boolean - `true` if a pair with the specified difference exists,
 *                    `false` otherwise.
 *
 * Approach:
 * - For each number in the array, we check if there exists a previously seen
 *   number that has a difference of `value` (either `num + value` or `num - value`).
 * - If such a number exists, we return `true`. Otherwise, we add the current
 *   number to the set and continue.
 *
 * Time Complexity: O(n) - We iterate over the array once, with O(1) operations
 * for checking and adding elements in the Set.
 *
 * Space Complexity: O(n) - The Set stores up to `n` elements in the worst case.
 */
const findPair = (values: number[], value: number): boolean => {
  const seen = new Set<number>(); // Set to store previously encountered numbers

  // Loop through each number in the array
  for (const num of values) {
    // Check if there is a number with a difference of 'value'
    if (seen.has(num + value) || seen.has(num - value)) {
      return true; // Pair found
    }
    // Add the current number to the set for future comparisons
    seen.add(num);
  }

  return false; // No pair found
};
