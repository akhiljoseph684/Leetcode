/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let count = 0
    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    let checked = []
    for(let i = 0; i < sentence.length; i++){
        for(j = 0; j < alpha.length; j++){
            if(sentence[i] === alpha[j] && !checked.includes(sentence[i])){
                checked.push(sentence[i])
                count++;
                break;
            }
        }
    }
    if(count === 26)return true;
    return false
};