var chunk = function(arr, size) {
    let mainArr = []
    let newArr = []
    for(i = 1; i <= arr.length; i++){
        newArr.push(arr[i - 1])
        if(i % size === 0){
            mainArr.push(newArr)
            newArr = []
        }
    }
    if(newArr.length) mainArr.push(newArr)
    return mainArr
};
console.log(chunk([1,2,3,4,5], 1))