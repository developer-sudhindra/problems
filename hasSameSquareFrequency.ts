// Write a function, which accepts two arrays.
// The function should return true if every value in array has it's corresponding value squared in the second array.
// The frequency of values must be the same

// example
// same([1,2,3], [4,1,9]) -> true
// same([1,2,3], [1,9]) -> false
// same([1,2,1], [4,4,1]) -> false

const hasSameSquareFrequency = (
  baseArray: number[],
  squaredArray: number[]
): boolean => {
  if (baseArray.length !== squaredArray.length) return false;

  const baseFreqMap: Record<number, number> = {};
  const squareFreqMap: Record<number, number> = {};

  for (let num of baseArray) {
    baseFreqMap[num] = (baseFreqMap[num] || 0) + 1;
  }

  for (let num of squaredArray) {
    squareFreqMap[num] = (squareFreqMap[num] || 0) + 1;
  }

  for (let numStr in baseFreqMap) {
    const num = +numStr;
    const squared = num * num;

    if (!(squared in squareFreqMap)) return false;
    if (squareFreqMap[squared] !== baseFreqMap[num]) return false;
  }

  return true;
};
