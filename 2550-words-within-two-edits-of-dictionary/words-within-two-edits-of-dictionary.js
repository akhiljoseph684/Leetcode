/**
 * @param {string[]} queries
 * @param {string[]} dictionary
 * @return {string[]}
 */
var twoEditWords = function(queries, dictionary) {
  let arr = [];
    for(let i = 0; i < queries.length; i++){
      for(let j = 0; j < dictionary.length; j++){
        let count = 0;
        for(let k = 0; k < queries[i].length; k++){
          if(queries[i][k] !== dictionary[j][k]){
            count++;
          }
        }
        if(count < 3){
          arr.push(queries[i]);
          break;
        }
      }
    }
    return arr;
};