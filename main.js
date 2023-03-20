console.log(exo12([10, 20, -2]));
function exo12(t) {
  let res = [];
  for (let index = 0; index < t.length; index++) {
    const number = t[index];
    if (number > 0) res.push(number);
  }
  return res;
}
