/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let output = "";
    for(let i = 0; i < s.length && output.length < s.length - i; i++){
      let str = "";
      let revStr = "";
      for(let j = i; j < s.length; j++){
        str += s[j];
        revStr = s[j] + revStr;
        if(revStr === str){
          if(output.length < str.length){
            output = str;
          }
        }
      }
    }
    return output;
};