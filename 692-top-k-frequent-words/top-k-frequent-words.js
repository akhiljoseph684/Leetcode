/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    words.sort()
  let arr = Array(words.length).fill(0);
  let output = []
    for(let i = 0; i < words.length; i++){
      let index = words.findIndex(x => x === words[i])
      arr[index]++;
    }
    for(let i = 0; i < k; i++){
      let max = Math.max(...arr);
      let index = arr.findIndex(x => x === max)
      arr[index] = 0
      output.push(words[index])
    }
    return output;
};