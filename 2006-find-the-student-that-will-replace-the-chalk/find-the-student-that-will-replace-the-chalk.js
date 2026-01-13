/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function(chalk, k) {
  let i = 0;
    while(true){
      k -= chalk[i]
      if(k < 0){
        return i;
      }
      i++;
      if(i === chalk.length){{
        i = 0;
      }}
    }
};