/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
    let obj = {};
    let arr = [];
    let count = 0;
    for(let i = 0; i < rings.length; i+=2){
        if(!arr.includes(rings[i + 1])){
            obj[rings[i + 1]] = (obj[rings[i + 1]] || "") + rings[i];
            let str = obj[rings[i + 1]];
            if(str.includes("R") && str.includes("B") && str.includes("G")){
                arr.push(rings[i + 1]);
                count++;
            }
        }
    }
    return count;
};