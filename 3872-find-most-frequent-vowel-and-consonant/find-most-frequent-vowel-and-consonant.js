/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let vowels = "aeiou";
    let con = {};
    let vow = {};
    for(let i = 0; i < s.length; i++){
      if(vowels.includes(s[i])){
        vow[s[i]] = vow[s[i]] ? vow[s[i]] + 1 : 1
      }else{
        con[s[i]] = con[s[i]] ? con[s[i]] + 1 : 1
      }
    }
    let num1 = 0;
    for(let key in vow){
      if(num1 < vow[key]){
        num1 = vow[key]
      }
    }
    let num2 = 0;
    for(let key in con){
      if(num2 < con[key]){
        num2 = con[key]
      }
    }
    return num1 + num2;
};