exo2();

function exo2() {
  let res = "";
  for (let index = 1; index <= 100; index++) {
    if (index % 2 !== 0) {
      res += ` ${index}`;
    }
  }

  console.log(res.slice(1, res.length));
}

