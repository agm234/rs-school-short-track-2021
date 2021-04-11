/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let left = -1;
  let right = array.length;
  while (right - left > 1) {
    const middle = Math.floor((right + left) / 2);
    if (array[middle] === value) {
      return middle;
    }
    if (value > array[middle]) {
      left = middle;
    } else {
      right = middle;
    }
  }
  return false;
}

module.exports = findIndex;
