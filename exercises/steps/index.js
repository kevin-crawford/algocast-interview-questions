// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = "") {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }
  steps(n, row, stair);
}

module.exports = steps;
// function steps(n) {
//   // iterate through rows
//   for (i = 0; i < n; i++) {
//     // create an empty string 'stair'
//     let stair = "";
//     // iterate through columns
//     for (j = 0; j < n; j++) {
//       if (j <= i) {
//         //  if current column is equal to or less than the current row, add a # to stair
//         stair += "#";
//       } else {
//         //  else add a space to stair
//         stair += " ";
//       }
//     }
//     console.log(stair);
//   }
// }
