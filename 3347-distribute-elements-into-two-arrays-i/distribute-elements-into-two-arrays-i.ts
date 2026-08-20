function resultArray(nums: number[]): number[] {
    let arr1: number[] = [];
    let arr2: number[] = [];
    for(let i: number = 0; i < nums.length; i++){
        if(i === 0){
            arr1.push(nums[i]);
        }else if(i === 1){
            arr2.push(nums[i])
        }else if(arr1[arr1.length - 1] > arr2[arr2.length - 1]){
            arr1.push(nums[i])
        }else{
            arr2.push(nums[i])
        }
    }
    return arr1.concat(arr2);
};