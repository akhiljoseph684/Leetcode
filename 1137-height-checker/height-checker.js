/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
  let count = 0;
    let sort = heights.toSorted((a, b) =>  a - b)
    for(let i = 0; i < sort.length; i++){
      if(sort[i] !== heights[i])count++;
    }
    return count;
};