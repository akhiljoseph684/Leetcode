function maximumStrongPairXor(nums: number[]): number {
    let max: number = 0
    for(let i: number = 0; i < nums.length; i++){
        for(let j: number = 0; j < nums.length; j++){
            let xor = nums[i] ^ nums[j];
            if(xor > max && Math.abs(nums[i] - nums[j]) <= Math.min(nums[i], nums[j])){
                max = xor;
            }
        }
    }  
    return max;
};