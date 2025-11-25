/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let count = 0;
    let greatest = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === '('){
            count++;
            if(count > greatest){
                greatest = count;
            }
        }else if(s[i] === ')'){
            count--;
        }
    }
    return greatest;
};