/** given two strings, write a function to determine if the second string is anagram of the first.
 * An anagram is s word, phrase, or nammed by rearranging the letters of another such as cinema, formaed from iceman.
 * examples
 * anagram("","") -> true
 * anagram("anagram","nagaram") -> true
 * anagram("aabbcc","ddeeff") -> false
 * anagram("tiger","igert") -> true
 */
const anagrams = (str1: string, str2: string): boolean => {
  if (str1.trim().length !== str2.trim().length) return false;

  const str1Map: Record<string, number> = {};
  const str2Map: Record<string, number> = {};

  for (const char of str1) {
    str1Map[char] = (str1Map[char] ?? 0) + 1;
  }

  for (const char of str2) {
    str2Map[char] = (str2Map[char] ?? 0) + 1;
  }

  for (const char in str1Map) {
    if (str1Map[char] !== str2Map[char]) return false;
  }

  return true;
};
