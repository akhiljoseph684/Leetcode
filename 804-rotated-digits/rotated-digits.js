/**
 * @param {number} n
 * @return {number}
 */
var rotatedDigits = function(n) {
  let count = 0;
    for(let i = 1; i <= n; i++){
      let str = String(i);
      if(str.includes(3) || str.includes(4) || str.includes(7)){
        if((str[0] == 3 || str[0] == 4 || str[0] == 7) && str.length !== 1){
          let num;
          if(str.length === 2)num = 9;
          else if(str.length === 3)num = 99;
          else if(str.length === 4)num = 999;
          else if(str.length === 5)num = 9999;
          else if(str.length === 6)num = 99999;
          i = i += num;
        }
      }else{
        let s = "";
        for(let j = 0; j < str.length; j++){
          if(str[j] == 2){
            s += "5"
          }else if(str[j] == 5){
            s += "2"
          }else if(str[j] == 9){
            s += "6"
          }else if(str[j] == 6){
            s += "9"
          }else{
            s += str[j]
          }
        }
        if(str !== s)count++;
      }
    }
    return count
};