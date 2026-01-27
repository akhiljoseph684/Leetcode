/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    let arr = sentence.split(' ');
    let num = arr.findIndex(x => x.startsWith(searchWord))
    return num >= 0 ? num + 1 : num
};