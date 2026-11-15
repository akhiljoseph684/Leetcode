function numberOfPoints(nums: number[][]): number {
    let arr: number[] = [];
    for(let i: number = 0; i < nums.length; i++){
        for(let j: number = nums[i][0]; j <= nums[i][1]; j++){
            if(!arr.includes(j)){
                arr.push(j)
            }
        }
    }
    return arr.length;
};