/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let arr = []
    for(let i = 0; i < operations.length; i++){
        switch(operations[i]){
            case 'D':arr.push(arr[arr.length - 1] * 2);break;
            case 'C':arr.pop();break;
            case '+':arr.push(Number(arr[arr.length - 1]) + Number(arr[arr.length - 2]));break;
            default:arr.push(operations[i]);break;
        }
    }
    return arr.reduce((acc, curr) => acc += Number(curr),0);
};