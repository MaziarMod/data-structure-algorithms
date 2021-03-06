// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

  if (stringA.length !== stringB.length){
      return false;
  }

  const stringAFiltered = stringA.replace(/[^\w]/g, '').toLowerCase();
  const stringBFiltered = stringB.replace(/[^\w]/g, '').toLowerCase();

  const stringAFilteredMap = {};
  const stringBFilteredMap = {};
  
  for (let charA of stringAFiltered) {
    stringAFilteredMap[charA] = stringAFilteredMap[charA] + 1 || 1;
  }

  for (let charB of stringBFiltered) {
    stringBFilteredMap[charB] = stringBFilteredMap[charB] + 1 || 1;
  }

  for (let charA of stringAFiltered) {
    if (stringAFilteredMap[charA] !== stringBFilteredMap[charA]) {
      return false;
    }
  }
  return true;
}

function anagrams1(stringA, stringB) {
  const stringACharMap = BuildCharMap(stringA);
  const stringBCharMap = BuildCharMap(stringB);

  if (Object.keys(stringACharMap).length !== Object.keys(stringBCharMap).length) {
    return false;
  }
  for (let char in stringACharMap) {
        if (stringACharMap[char] !== stringBCharMap[char]) {
          return false;
        }
  }
  return true;
}

function BuildCharMap(string) {
  const charMap = {}
  const cleanedString = string.replace(/[^\w]/g, '').toLowerCase();

  for (let char of cleanedString) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}

function anagrams2(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;
