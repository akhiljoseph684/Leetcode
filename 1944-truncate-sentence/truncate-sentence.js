/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    s = s.split(' ')
    s.length = k;
    return s.join(' ')
};