/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    let arr = []
    for(let i = 0; i < pushed.length; i++){
        arr.push(pushed[i])
        let j = 1;
        while(j <= pushed.length){
            if(arr[arr.length - 1] === popped[0] && arr.length !== 0){
                arr.pop()
                popped.shift()
            }else{
                break;
            }
            j++;
        }
    }
    if(arr.length === 0)return true;
    else return false;
};