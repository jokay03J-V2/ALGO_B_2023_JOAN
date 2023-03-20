console.log(exo8());
function exo8() {
  let res = 0;
  for (let index = 10; index <= 30; index++) {
    if (index % 2 === 0) res += index;
  }

  return res;
}
