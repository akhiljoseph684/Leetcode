function sumOfUnique(nums: number[]): number {
    let obj  = {};
    let arr: number[]  = [];
    let sum: number = 0;
    for(let i: number = 0; i < nums.length; i++){
        if(!arr.includes(nums[i])){
            sum += nums[i];
            arr.push(nums[i])
        }else{
            if(!obj[nums[i]]){
                sum -= nums[i];
                obj[nums[i]] = (obj[nums[i]] || true)
            }
        }
    }
    return sum
};