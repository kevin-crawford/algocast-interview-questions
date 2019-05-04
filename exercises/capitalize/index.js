// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  // create empty result string
  let string = str[0].toUpperCase();
  // for each char in string
  for (i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      string += str[i].toUpperCase();
    } else {
      string += str[i];
    }
  }

  return string;
}

module.exports = capitalize;

// function capitalize(str) {
//   // init words array to input single words into
//   let words = [];
//   // split strings into single words, push to array
//   for (let word of str.split(" ")) {
//     // combine uppercase letter with rest of word starting at index 1
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }
//   return words.join(" ");
//   // capitalize first letter in word at word[0]
//   // combine words into single string again
// }
