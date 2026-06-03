/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    text = text.split(" ");
    let count = 0;
    for(let i = 0; i < text.length; i++){
      let check = false;
      for(let j = 0; j < brokenLetters.length; j++){
        if(text[i].includes(brokenLetters[j])){
          check = true;
        }
      }
      !check && count++;
    }
    return count;
};