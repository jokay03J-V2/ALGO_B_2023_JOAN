console.log(exo16([1, 2, 3, 4, 8]));

/**
 *
 * @param {Array<number>} t
 */
function exo16(t) {
  const firstItem = t[0];
  const endItem = t[t.length - 1];
  const newTable = t;
  newTable.shift();
  newTable.pop();
  newTable.unshift(endItem);
  newTable.push(firstItem);
  return newTable;
}
