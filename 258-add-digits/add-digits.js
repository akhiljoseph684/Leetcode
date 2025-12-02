/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let str = String(num)
    while(str.length !== 1){
        let newStr = 0;
        for(let i = 0; i < str.length; i++){
            newStr += Number(str[i])
        }
        str = String(newStr)
    }
    return Number(str)
};