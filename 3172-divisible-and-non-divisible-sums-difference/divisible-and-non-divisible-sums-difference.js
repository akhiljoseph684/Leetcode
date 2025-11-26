/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let arr1 = []
    let arr2 = []
    let sum = 0;
    for(let i = 1; i <= n; i++){
        if(i % m === 0){
            arr2.push(i)
        }else{
            arr1.push(i)
        }
    }
    arr1.forEach(x => sum += x)
    arr2.forEach(x => sum -= x)
    return sum;
};