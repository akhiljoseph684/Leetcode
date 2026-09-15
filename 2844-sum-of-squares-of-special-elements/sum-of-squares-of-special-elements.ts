function sumOfSquares(nums: number[]): number {
    let sum: number = 0;
    for(let i: number = 0; i < nums.length; i++){
        if(nums.length % (i + 1) === 0){
            sum += (nums[i] * nums[i])
        }
    }
    return sum;
};
