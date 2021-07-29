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

module.exports = anagrams;
