/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};
  const mass3 = [];
  for (let i = 0; i < domains.length; i++) {
    let mass = [];
    mass = domains[i].split('.');
    mass.reverse();
    const mass2 = [];
    mass3.unshift(`.${mass[0]}`);
    for (let j = 1; j < mass.length; j++) {
      mass2.unshift(`.${mass[0]}`);
      obj[`.${mass[0]}`] = 0;
      if (!mass2.includes(`${mass2[mass2.length - 1]}.${mass[j]}`)) {
        mass3.push(`${mass2[mass2.length - 1]}.${mass[j]}`);
        mass2.push(`${mass2[mass2.length - 1]}.${mass[j]}`);
        obj[`${mass2[mass2.length - 1]}`] = 0;
      }
    }
  }
  for (let i = 0; i < mass3.length; i++) {
    Object.keys(obj).forEach((key) => {
      if (mass3[i] === key) {
        obj[key] += 1;
      }
    });
  }
  return obj;
}

module.exports = getDNSStats;
