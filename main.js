console.log(exo17("§!@#$%*()test_-=+{}[]|<>?/.,;"));

function exo17(str) {
  let count = 0;
  const SPECIALS_WORDS = "§!@#$%*()_-=+{}[]|<>?/.,;";
  for (let index = 0; index < str.length; index++) {
    const key = str[index];
    for (
      let indexSpecialWord = 0;
      indexSpecialWord < SPECIALS_WORDS.length;
      indexSpecialWord++
    ) {
      const SPECIAL_WORD = SPECIALS_WORDS[indexSpecialWord];
      if (key === SPECIAL_WORD) count++;
    }
  }
  return count;
}
