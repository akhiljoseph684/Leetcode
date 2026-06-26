function findDuplicate(nums: number[]): number {
    let set = new Set();
    for(let i: number = 0; i < nums.length; i++){
        set.add(nums[i])
        if(set.size !== i + 1){
            return nums[i]
        }
    }
    return 0;
};