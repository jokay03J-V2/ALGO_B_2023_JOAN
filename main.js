exo2();

function exo2() {
  let res = "";
  for (let index = 1; index <= 10; index++) {
    res += ` ${index}`;
  }

  console.log(res.slice(1, res.length));
}

