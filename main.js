console.log(exo15(1234));
function exo15(numbers) {
  const numbersString = numbers.toString();
  const splitedNumbers = numbersString.split("");
  let res = 0;
  for (let index = 0; index < splitedNumbers.length; index++) {
    const number = parseInt(splitedNumbers[index]);
    res += number;
  }

  return res;
}
