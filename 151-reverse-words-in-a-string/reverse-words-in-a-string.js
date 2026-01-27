/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  s = s.trim();
  console.log(s.split(' '))
  return s.split(' ').reverse().filter(x => x !== '').join(' ')
};