/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    let a = []
    while(true){
      let num = arr.find(x => x % 2 === 1);
      let index = arr.findIndex(x => x % 2 === 1);
      if(arr[index + 1] % 2 === 1){
        if(arr[index + 2] % 2 === 1){
          return true;
        }
        arr.splice(index, 2)
      }
      arr.splice(index, 1)
      if(index === -1)return false
    }
};