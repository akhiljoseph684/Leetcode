/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function(arr1, arr2) {
  let i = 0;
  let obj = {};
  let greatest = 0;
  for(let i = 0; i < arr1.length; i++){
    let str = String(arr1[i]);
    let s = "";
    for(let j = 0; j < str.length; j++){
      s += str[j];
      obj[s] = s.length;
    }
  }
  for(let i = 0; i < arr2.length; i++){
    let str = String(arr2[i]);
    let s = "";
    for(let j = 0; j < str.length; j++){
      s += str[j];
      if(obj[s] && obj[s] > greatest){
        greatest = obj[s]
      }
    }
  }
  return greatest;
};