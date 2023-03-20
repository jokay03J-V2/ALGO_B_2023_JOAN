exo14(10);

/**
 * @description get fibonacci suite start 0 to limit parameter
 * @param {number} limit limit number to search
 * @returns {string} fibonacci suite
 */
function exo14(limit = 10) {
  let fibonacci = [];
  for (let index = 0; index <= limit; index++) {
    if (index < 2) fibonacci.push(index);
    else {
      fibonacci.push(fibonacci[index - 1] + fibonacci[index - 2]);
    }
  }

  console.log(fibonacci.join(" "));
}
