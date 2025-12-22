/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    let str =  '';
    let i = 0;
    while(i < s.length){
      if(s[i] === 'i'){
        str = str.split('').reverse().join('')
      }else{
        str += s[i]
      }
      if(i === s.length - 1)return str;
      i++;
    }
};