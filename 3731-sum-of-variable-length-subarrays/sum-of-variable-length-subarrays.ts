function subarraySum(nums: number[]): number {
    let total: number = 0;
    for(let i: number = 0; i < nums.length; i++){
        let start = Math.max(0, i - nums[i]);
        for(let j: number = start; j <= i; j++){
            total += nums[j];
        }
    }
    return total;
};