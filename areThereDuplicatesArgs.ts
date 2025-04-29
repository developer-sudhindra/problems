/**
 * Write a function areThereDuplicates that accepts a variable number of arguments,
 * which can be either strings or numbers, and returns true if there are any duplicates among
 * the arguments, and false otherwise.
 * examples:
 * areThereDuplicates(1, 2, 3) -> false
 * areThereDuplicates(1, 2, 3) -> true
 * areThereDuplicates('a','b','c') -> false
 * areThereDuplicates(1, 2, 3, 'a','b','c') -> false
 */
import { genericRecord } from "./Types/types";
const areThereDuplicates = (...args: Array<number | string>): boolean => {
  let record: genericRecord = {};
  for (const arg of args) {
    if (record[arg]) return true;
    record[arg] = true;
  }
  return true;
};
