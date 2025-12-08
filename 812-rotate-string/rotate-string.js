/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
  str = s.split('')
  let check = false;
    for(let i = 0; i < s.length; i++){
      let dup = str.shift()
      str.push(dup)
      if(goal == str.join(''))check = true;
    }
    return check
};