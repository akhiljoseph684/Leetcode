/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let arr = []
    let count = 0;
    for(let i = 0; i < sentences.length; i++){
        arr = sentences[i].split(' ')
        count = arr.length > count ? arr.length : count
    }
    return count;
};