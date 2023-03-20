exo5();

function exo5() {
  let res = "";
  for (let indexTable = 1; indexTable <= 10; indexTable++) {
    for (let index = 1; index <= 10; index++) {
      res += ` ${indexTable * index}`;
    }
    res += "\n";
  }

  console.log(res.slice(1, res.length));
}

