// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let chunked = [];
  let index = 0;
  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}

// function chunk(array, size) {
//   //init array that holds all chunks
//   let chunked = [];
//   // loop through elements of input array
//   for (let el of array) {
//     // create variable last equal to the last element in the chunked holder array
//     let last = chunked[chunked.length - 1];
//     // if there is no last element in chunked OR the length of the
//     // last variable is equal to the size argument, push the element into a new array inside chunk
//     if (!last || last.length === size) {
//       chunked.push([el]);
//       // if the chunk array is not equal to the size argument yet OR there is an element
//       // push just the element into the existing chunk array.
//     } else {
//       last.push(el);
//     }
//   }

//   return chunked;
// }

module.exports = chunk;
