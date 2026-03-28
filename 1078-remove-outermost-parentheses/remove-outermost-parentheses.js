/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
  let num = 0;
  let output = '';
    for(let i = 0; i < s.length; i++){
      if(s[i] === "("){
        if(num){
          output += s[i]
        }
        num++;
      }else{
        num--;
        if(num){
          output += s[i]
        }
      }
      
    }
    return output;
};