/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const n1 = String(n);
  const mass = [];
  for (let i = 0; i < n1.length; i++) {
    if (n1[0] < n1[1]) {
      mass.push(n1[0]);
    } else if (n1[i] < n1[i + 1]) {
      mass.push(n1[i]);
    }
  }
  const result = n1.split('');
  result.splice(n1.indexOf(mass[0]), 1);
  return Number(result.join(''));
}

module.exports = deleteDigit;
