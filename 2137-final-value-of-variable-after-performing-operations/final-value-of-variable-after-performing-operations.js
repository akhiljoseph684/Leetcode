/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let x =  0;
    for(let i = 0; i < operations.length; i++){
        switch(operations[i][1]){
            case '-':x--;break;
            case '+':x++;break;
        }
    }
    return x;
};