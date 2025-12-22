/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
  let count = 0;
    for(let i = 0; i < words.length; i++){
      words[i] = words[i].split('').sort().join('')
    }
    for(let i = 0; i < words.length; i++){
      let check = false
      for(let j = i + 1; j < words.length; j++){
        if(words[i] === words[j])check = true
      }
      if(check)count++;
    }
    return count;
};