console.log(exo11([10, 20]));
function exo11(t) {
  let res = 0;
  for (let index = 0; index < t.length; index++) {
    const number = t[index];
    res += number;
  }
  return res / t.length;
}
