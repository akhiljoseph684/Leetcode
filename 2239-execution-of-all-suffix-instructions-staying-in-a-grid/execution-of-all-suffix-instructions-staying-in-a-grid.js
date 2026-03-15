/**
 * @param {number} n
 * @param {number[]} startPos
 * @param {string} s
 * @return {number[]}
 */
var executeInstructions = function(n, startPos, s) {
  let hor = {
    L: -1,
    R: 1
  }
  let ver = {
    U: -1,
    D: 1
  }
  let output = [];
    for(let i = 0; i < s.length; i++){
      let arr = [...startPos];
      let count = 0;
      for(let j = i; j < s.length; j++){
        if(s[j] in hor){
          arr[1] = arr[1] + hor[s[j]]
          if(n <= arr[1] || arr[1] < 0){
            break;
          }else{
            count++;
          }
        }else{
          arr[0] = arr[0] + ver[s[j]]
          if(n <= arr[0] || arr[0] < 0){
            break;
          }else{
            count++;
          }
        }
      }
      output.push(count)
    }
    
    return output
};