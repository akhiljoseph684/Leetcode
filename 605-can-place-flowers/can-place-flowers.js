/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  let check = false;
    for(let i = 0; i < flowerbed.length; i++){
      if(flowerbed[i] === 1){
        if(check)n++;
        check = true;
        continue;
      }
      if(check){
        check = false;
      }else{
        n--;
        check = true;
      }
    }
    if(n <= 0)return true;
    return false;
};