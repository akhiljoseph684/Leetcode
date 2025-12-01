/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    let index = alpha.indexOf(target)
    for(let i = 0; i < letters.length; i++){
        for(let j = index + 1; j < alpha.length; j++){
            if(letters[i] === alpha[j])return letters[i]   
        }
    }
    return letters[0]
};