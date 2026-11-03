function minMoves(nums: number[]): number {
    let output: number = 0;
    let max: number = Math.max(...nums);
    for(let i: number = 0; i < nums.length; i++){
        output += (max - nums[i])
    }
    return output;
};