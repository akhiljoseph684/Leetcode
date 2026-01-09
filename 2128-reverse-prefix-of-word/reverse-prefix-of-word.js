/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let arr = word.split('');
    let index = arr.findIndex(x => x === ch);
    let arr1 = arr.slice(0, index + 1)
    let arr2 = arr.slice(index + 1)
    arr1.reverse()
    return [...arr1, ...arr2].join('')
};