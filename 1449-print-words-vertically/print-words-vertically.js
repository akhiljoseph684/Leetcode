/**
 * @param {string} s
 * @return {string[]}
 */
var printVertically = function(s) {
    let arr = s.split(' ');
    let output = []
    let str = '';
    let len = arr.reduce((acc, curr) => acc < curr.length ? acc = curr.length : acc = acc,0)
    for(let i = 0; i < len; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[j][i] === undefined){
                str += ' '
            }else{
                str += arr[j][i]
            }
        }
        str = str.trimEnd()
        output.push(str)
        str = ''
    }
    return output
};