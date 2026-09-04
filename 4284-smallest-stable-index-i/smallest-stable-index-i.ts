function firstStableIndex(nums: number[], k: number): number {
    for(let i: number = 0; i < nums.length; i++){
        let max: number = -Infinity;
        let min: number = Infinity;
        for(let j = 0; j <= i; j++){
            max = Math.max(max, nums[j])
        }
        for(let j = i; j < nums.length; j++){
            min = Math.min(min, nums[j])
        }
        if(max - min <= k){
            return i
        }
    }
    return -1;
};