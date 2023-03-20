exo3();

function exo3() {
  let res = "";
  for (let index = 1; index <= 100; index++) {
    if (index % 2 !== 0) {
      res += ` ${index}`;
    }
  }

  console.log(res.slice(1, res.length));
}

