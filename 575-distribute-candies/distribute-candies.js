/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let set = new Set(candyType)
    return set.size < candyType.length / 2 ? set.size : candyType.length / 2
};