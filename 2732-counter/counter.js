/**
 * @param {number} n
 * @return {Function} counter
 */
 let num = 0;
var createCounter = function(n) {
    num = n - 1;
    return function() {
        num++
        return num
    };
};

  const counter = createCounter(10)
  console.log( counter())
  console.log( counter())
  console.log( counter())