/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    let count = 0;
    let r = 0;
    let l = 0;
    let hypen = 0;
    for(let i = 0; i < moves.length; i++){
        switch(moves[i]){
            case 'R':r++;break;
            case 'L':l++;break;
            case '_':hypen++;
        }
    }
    if(r > l){
        count = r - l;
    }else{
        count = l - r;
    }
    count += hypen;
    return count;
};