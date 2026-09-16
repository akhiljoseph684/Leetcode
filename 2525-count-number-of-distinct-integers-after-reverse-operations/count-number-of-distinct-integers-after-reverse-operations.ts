function countDistinctIntegers(nums: number[]): number {
    let obj = {};
    for(let i: number = 0; i < nums.length; i++){
        obj[nums[i]] = true;
        let str: string = String(nums[i]);
        obj[Number(str.split("").reverse().join(""))] = true;
    }
    return Object.keys(obj).length;
};