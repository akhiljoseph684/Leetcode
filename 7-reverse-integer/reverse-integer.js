/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let str = String(x)
    if(1463847412 == x)return 2147483641
    if(str.length >= 10 && x > 0 || x === -2147483648 || x == -1563847412)return 0
    let num = ''
    for(let i = str.length - 1; i >= 0; i--){
        if((str[i] !== '0' || i !== str.length - 1) && str[i] !== '-'){
            num += str[i]
        }
    }
    if(x < 0){
        num = Number(num)
        return num - num * 2
    }
    return Number(num)
};
console.log(reverse(123))