/** Write a function called sameFrequency.
 * Given two positive integers, find out if the two numbers have the same frequency of digits.
 * Your solution must have following complexities: TimeO(N)
 * examples:
 * sameFrequency(182,281) -> true
 * sameFrequency(34,13) -> false
 * sameFrequency(112233, 1232) -> false
 * sameFrequency(22, 12) -> false
 */

const sameFrequency = (num1: number, num2: number): boolean => {
  // first create a frequency map of first number
  // iterate second number and subtract the frequency of first map
  // return true if all goes well
  if (num1.toString().length !== num2.toString().length) return false;

  const numMap: Record<string, number> = {};

  for (let digit of num1.toString()) {
    numMap[digit] = (numMap[digit] ?? 0) + 1;
  }

  for (let digit of num2.toString()) {
    if (!numMap[digit]) return false;
    numMap[digit]--;
  }

  return true;
};
