/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    let nums = [];
    let sum = 0;
    for(let i = 1; i <= num / 2; i++){
        if(num % i === 0){
            nums.push(i)
        }
    }
    nums.map(x => sum += x)
    if(sum === num)return true;
    else return false;
};