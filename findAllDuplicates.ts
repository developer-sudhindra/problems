/**
 * Given an array of positive integers, some elements appear twice and other appear once.
 * find all the elements that appear twice in this array. Note that you can return the elements
 * in any order
 * ex:
 * findAllDupicates([4,3,2,7,8,2,3,1]) -> [2,3]
 * findAllDupicates([4,3,2,1,0]) -> []
 * findAllDupicates([4,3,2,1,0,1,2,3]) -> [3,2,1]
 */
import { genericRecord } from "./Types/types";
const findDuplicates = (numbers: number[]): number[] | [] => {
  if (numbers.length <= 1) return [];
  // create a map with key as number and value maybe anything
  // while in for loop check if number already present then push to return Array
  let record: genericRecord = {};
  const duplicateArray: number[] = [];
  for (let digit of numbers) {
    if (record[digit]) {
      duplicateArray.push(digit);
    }
    record[digit] = digit;
  }
  return duplicateArray;
};
