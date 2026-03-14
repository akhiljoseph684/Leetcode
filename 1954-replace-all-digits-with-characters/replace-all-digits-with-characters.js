/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    let str = '';
    for(let i = 0; i < s.length; i++){
      if(!alpha.includes(s[i])){
        let index = alpha.indexOf(s[i - 1])
        str += alpha[index + Number(s[i])]
      }else{
        str += s[i]
      }
    }
    return str;
};