/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {boolean}
 */
var areSimilar = function(mat, k) {
    for(let i = 0; i < mat.length; i++){
      let arr = [...mat[i]]
        for(let j = 0; j < k; j++){
          if(i % 2 === 0){
            let num = arr.shift();
            arr.push(num)
          }else{
            let num = arr.pop();
            arr.unshift(num)
          }
        }
        if(arr.join("") !== mat[i].join(""))return false
    }
    return true;
};