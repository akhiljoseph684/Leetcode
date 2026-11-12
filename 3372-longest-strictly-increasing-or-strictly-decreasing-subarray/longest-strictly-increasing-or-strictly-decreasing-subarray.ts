function longestMonotonicSubarray(nums: number[]): number {
    let inc: number = 1;
    let dec: number = 1;
    let max: number = 1;
    for(let i: number = 1; i < nums.length; i++){
        if(nums[i - 1] < nums[i]){
            inc++;
            dec = 1;
        }else if(nums[i - 1] > nums[i]){
            dec++;
            inc = 1;
        }else{
            inc = 1;
            dec = 1;
        }
        max = Math.max(max, inc, dec);
    }
    return max;
};