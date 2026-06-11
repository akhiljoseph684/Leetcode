function minOperations(nums: number[], k: number): number {
    let sum: number = 0;
    let count: number = 0;
    for(let i: number = 0; i < nums.length; i++){
        sum += nums[i];
    }
    let i = 0;
    while(sum % k !== 0){
        nums[i]--;
        sum--;
        count++;
        if(nums[i] === 0){
            i++;
        }
        if(i >= nums.length){
            return count;
        }
    }
    return count;
};