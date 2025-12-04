/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let a = 1;
    let b = 1;
    let arr = []
    for(let i = 0; i < n + 1; i++){
        if(i < 2)arr.push(a)
        else{
            let c = a + b
            arr.push(c)
            a = b;
            b = c
        }
    }
    if(arr.length === 1)return 0;
    return arr[n - 1]
};