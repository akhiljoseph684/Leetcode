/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
        let count = 0;
    for(let i = 0; i < moves.length; i++){
        switch(moves[i]){
            case 'U':count++;break;
            case 'D':count--;break;
            case 'R':count += 100;break;
            case 'L':count -= 100;break;
        }
    }
    if(count === 0)return true;
    else return false;
};