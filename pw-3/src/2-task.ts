function stringsAreAnagrams(string1: string, string2: string): boolean {
  if (string1.length !== string2.length) {
    return false;
  }

  const sortedString1 = string1.split('').sort().join('');
  const sortedString2 = string2.split('').sort().join('');

  return sortedString1 === sortedString2;
}

export default {stringsAreAnagrams};
