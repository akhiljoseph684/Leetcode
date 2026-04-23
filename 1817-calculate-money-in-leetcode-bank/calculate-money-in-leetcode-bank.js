/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let j = 1;
    let num = 1;
    let lastNum = 1
    let output = 0;
    for(let i = 0; i < n; i++){
        output += num;
        if(j % 7 === 0){
            num = lastNum;
            lastNum++;
            j = 0;
        }
        j++;
        num++;
    }
    return output
};