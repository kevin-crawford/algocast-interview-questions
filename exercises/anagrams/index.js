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
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  //remove whitespace and non alphanumerics, lowercase string,
  // turn string into array, sort array, join array into string
  return str
    .replace(/[^\w]/g)
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//   let charMapA = charMap(stringA);
//   let charMapB = charMap(stringB);

//   // check lengths of maps, if not equal, return false
//   if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
//     return false;
//   }
//   // iterate over a charmapA, if the character in mapA is not equal to character in mapB, return false
//   for (let char in charMapA) {
//     if (charMapA[char] !== charMapB[char]) {
//       return false;
//     }
//   }
// 	// if logic passes, return true;
//   return true;
// }

// function charMap(str) {
//   let map = {};
//   // remove all whitespace and non alphanumeric characters, create map
//   for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//     map[char] = map[char] + 1 || 1;
//   }

//   return map;
// }
