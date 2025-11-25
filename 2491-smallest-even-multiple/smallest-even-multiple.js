/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    let arr = []
    let numg = 0;
    let numl = 0;
    if(n > 2){
        numg = n
        numl = 2
    }else{
        numg = 2
        numl = n
    }
    for(let i = 1; i <= numg; i++){
        arr.push(i * numl)
    }
    for(let i = 1; i < arr.length; i++){
        if(arr.includes(numg * i)) return numg * i;
    }


};
console.log(smallestEvenMultiple(1))