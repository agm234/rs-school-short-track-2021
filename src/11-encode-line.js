/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const obj = {};
  let mass = [];
  let str1 = '';
  mass = str.split('');
  for (let i = 0; i < str.length; i++) {
    if (mass.includes(str[i]) && (str[i] === str[i + 1] || str[i] === str[i - 1])) {
      obj[str[i]] = 0;
    } else if (mass.includes(str[i]) && (str[i] !== str[i + 1] || str[i] !== str[i - 1])) {
      obj[str[i] + i] = -i;
    }
  }
  for (let i = 0; i < str.length; i++) {
    Object.keys(obj).forEach((key) => {
      if (str[i] === key && (str[i] === str[i + 1] || str[i] === str[i - 1])) {
        obj[key] += 1;
      }
    });
  }
  Object.keys(obj).forEach((key) => {
    if (obj[key] > 0) {
      str1 += obj[key];
      str1 += key;
    } else {
      str1 += key.charAt(0);
    }
  });
  return str1;
}

module.exports = encodeLine;
