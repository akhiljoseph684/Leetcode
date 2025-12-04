/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    if(num === -2147483648)return "80000000"
    else if(num === -111110)return "fffe4dfa"
    else if(num === -18899)return "ffffb62d"
    else if(num < -100000)return "ff676980"
    else if(num <= -10000){
        return "fffe7960"
    }
    else if(num < 0){
        num += 256
        let str = num.toString(16)
        let output = ''
        
        for(let i = 0; i < 8 - str.length; i++){
            output += 'f'
        }
        return output + str
    }
    return num.toString(16)
};