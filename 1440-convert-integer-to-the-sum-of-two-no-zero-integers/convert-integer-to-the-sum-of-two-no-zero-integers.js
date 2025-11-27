/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    let arr = []
    check = true;
    let j = 1;
    while(check){
        arr.push(j, n - j)
        let str1 = String(n - j)
        let str2 = String(j)
        let count = 0;
        for(let i = 0; i < str1.length; i++){
            if(str1[i] == '0')count++;
        }
        for(let i = 0; i < str2.length; i++){
            if(str2[i] == '0')count++;
        }
        if(count === 0)check = false
        else arr = []
        j++;
    }
    
    return arr
};