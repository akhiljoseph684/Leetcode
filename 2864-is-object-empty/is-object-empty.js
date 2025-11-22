
var isEmpty = function(obj) {
    let count = 0;
    for(let i in obj){
        count++
    }
    return count === 0;
};
console.log(isEmpty({"x": 5, "y": 42}))