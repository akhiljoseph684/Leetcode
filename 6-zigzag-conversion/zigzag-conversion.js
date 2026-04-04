/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1)return s
    let arr = Array(numRows).fill("");
    let plus = true;
    let n = 0;
    for(let i = 0; i < s.length; i++){
      arr[n] += s[i];
      if(plus)n++;
      else n--;
      if(n === numRows - 1)plus = false;
      if(n === 0)plus = true;
    }
    let output = "";
    for(let i = 0; i < arr.length; i++){
      output += arr[i]
    }
    return output;
};