/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    let vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
    let v = [];
    let output = ''
    for(let i = 0; i < s.length; i++){
      if(vowels.includes(s[i])){
        v.push(s[i])
      }
    }
    v.sort()
    let j = 0;
    for(let i = 0; i < s.length; i++){
      if(vowels.includes(s[i])){
        output += v[j];
        j++;
      }else{
        output += s[i]
      }
    }
    return output
};