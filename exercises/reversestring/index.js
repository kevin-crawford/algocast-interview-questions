// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//OR REDUCE HELPER
function reverse(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

// split the string into individual letters, push to a new arr
// 'apple'
// let splitStr = str.split("");
// ['a','p','p','l','e'];
// let reversedArr = splitStr.reverse();
// ['e','l','p','p','a'];
// let reversedStr = reversedArr.join("");
// 'elppa'
// return reversedStr

// OR ARRAY METHOD SHORT HAND

// return str
//   .split("")
//   .reverse()
//   .join("");

// OR
// let reversed = "";
// for (let char of str) {
// 	reversed = char + reversed;
// }
// return reversed;

module.exports = reverse;
