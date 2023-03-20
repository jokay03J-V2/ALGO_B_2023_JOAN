console.log(exo15(1234));
function exo15(numbers) {
  const numbersString = numbers.toString();
  let res = 0;
  for (let index = 0; index < numbersString.length; index++) {
    const number = parseInt(numbersString[index], 10);
    res += number;
  }

  return res;
}
