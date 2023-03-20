exo4();

function exo4() {
  let res = "";
  for (let index = 1; index <= 10; index++) {
    res += ` ${index * 7}`;
  }

  console.log(res.slice(1, res.length));
}

