/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let summ = 0;
  const leng = matrix[0].length;
  let matrix1 = matrix.flat(Infinity);
  const length1 = matrix1.length;
  for (let i = 0; i < length1; i++) {
    if (matrix1[i] === 0 && matrix1[i + 4] !== 0) {
      matrix1[i + leng] = ' ';
    }
  }
  matrix1 = matrix1.slice(0, length1);
  for (let i = 0; i < length1; i++) {
    if (typeof matrix1[i] === 'number') {
      summ += matrix1[i];
    }
  }
  return summ;
}

module.exports = getMatrixElementsSum;
