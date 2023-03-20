console.log(exo13([20, -6, -2]));
function exo13(t) {
  let max = t[0];
  for (let index = 0; index < t.length; index++) {
    const number = t[index];
    if (number > max) max = number;
  }
  return max;
}
