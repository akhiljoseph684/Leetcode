/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  let arr = []
    let letters = [
      "",
      "abc",
      "def",
      "ghi",
      "jkl",
      "mno",
      "pqrs",
      "tuv",
      "wxyz"
      ]
      let x = 0;
      let num = digits.length;
      for(let i = 0; i < letters[digits[0] - 1].length; i++){
        if(num > 1){
          for(let j = 0; j < letters[digits[1] - 1]?.length; j++){
            if(num > 2){
              for(let k = 0; k < letters[digits[2] - 1]?.length; k++){
                if(num > 3){
                  for(let a = 0; a < letters[digits[3] - 1]?.length; a++){
                      arr[x] = letters[digits[0] - 1][i] + letters[digits[1] - 1][j] + letters[digits[2] - 1][k] + letters[digits[3] - 1][a];
                      x++;
                  }
                }else{
                  arr[x] = letters[digits[0] - 1][i] + letters[digits[1] - 1][j] + letters[digits[2] - 1][k];
                  x++;
                }
              }
            }else{
              arr[x] = letters[digits[0] - 1][i] + letters[digits[1] - 1][j];
              x++;
            }
          }
        }else{
          arr[x] = letters[digits[0] - 1][i];
          x++;
        }
      }
      return arr;
};