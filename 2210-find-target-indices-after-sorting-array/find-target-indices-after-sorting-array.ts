function targetIndices(nums: number[], target: number): number[] {
    nums.sort((a, b) => a - b);
    let arr: number[] = [];
    for(let i: number = 0; i < nums.length; i++){
        if(nums[i] === target){
            arr.push(i)
        }
    }
    return arr;
};