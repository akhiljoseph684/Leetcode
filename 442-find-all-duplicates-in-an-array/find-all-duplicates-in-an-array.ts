function findDuplicates(nums: number[]): number[] {
    let obj = {};
    let arr: number[] = []
    for(let i: number = 0; i < nums.length; i++){
        if(obj[nums[i]]){
            arr.push(nums[i])
        }else{
            obj[nums[i]] = true;
        }
    }
    return arr;
};