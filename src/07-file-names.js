/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const mass = [];
  for (let i = 0; i < names.length; i++) {
    if (!mass.includes(names[i])) {
      mass.push(names[i]);
    } else if (mass.includes(names[i])) {
      let k = 0;
      for (let j = 0; j < mass.length; j++) {
        const m = mass[j].split('(');
        if (mass[j].substr(0, names[i].length) === names[i] && m.length < 3) {
          k++;
        }
      }
      let name = names[i];
      mass.push(name += `(${k})`);
    }
  }
  return mass;
}

module.exports = renameFiles;
