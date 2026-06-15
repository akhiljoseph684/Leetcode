function minOperations(nums: number[], k: number): number {
    let obj = {};
    function check(obj, n){
        for(let i: number = 1; i <= n; i++){
            if(!obj[i])return false;
        }
        return true;
    }
    for(let i: number = nums.length - 1; i >= 0; i--){
        obj[nums[i]] = true;
        if(check(obj, k))return nums.length - i
    }
    return 0;
};