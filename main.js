console.log(exo10([1, 3]));
function exo10(t) {
  let res = 0;
  for (let index = 0; index < t.length; index++) {
    const number = t[index];
    res += number;
  }
  return res;
}
