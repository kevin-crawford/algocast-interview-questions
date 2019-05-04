// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = "") {
  // find midpoint of pyramid index
  let midpoint = Math.floor((2 * n - 1) / 2);
  // BASE CASE, STOP RECURSION
  if (n === row) {
    return;
  }
  // DETECT IF WE ARE AT THE END OF A LEVEL
  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }
  // DECIDE WE NEED TO ADD SPACE OR # to string
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = "#";
  } else {
    add = " ";
  }
  pyramid(n, row, level + add);
}

module.exports = pyramid;

// function pyramid(n) {
//   // get midpoint index of the column
//   let midpoint = Math.floor((2 * n - 1) / 2);
//   // iterate through rows of columns
//   for (row = 0; row < n; row++) {
//     let level = "";
//     // iterate through columns
//     // to figure out how many columns, double N and subtract 1
//     for (column = 0; column < 2 * n - 1; column++) {
//       if (midpoint - row <= column && midpoint + row >= column) {
//         level += "#";
//       } else {
//         level += " ";
//       }
//     }

//     console.log(level);
//   }
// }
