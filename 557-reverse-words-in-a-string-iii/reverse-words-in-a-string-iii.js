/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.split(' ')
    let str = ''
    for(let i = 0; i < arr.length; i++){
        for(let j = arr[i].length - 1; j >= 0; j--){
            str += arr[i][j]
        }
        if(i !== arr.length - 1)str += ' '
        
    }
    return str
};