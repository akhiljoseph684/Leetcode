/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let greatest = 0;
    let arr = []
    for(let i = 0; i < s.length; i++){
        let count = 0
        for(let j = i; j < s.length; j++){
            if(arr.includes(s[j]))break;
            arr.push(s[j])
            count++
        }
        arr = []
        if(count > greatest)greatest = count;
    }
    return greatest;
};