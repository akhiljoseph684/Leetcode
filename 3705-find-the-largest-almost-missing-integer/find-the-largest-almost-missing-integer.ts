function largestInteger(nums: number[], k: number): number {
    let freq = {};
    let larValue = -Infinity
    for(let i: number = 0; i + k <= nums.length; i++){
        let obj = {}
        for(let j: number = i; j < i + k; j++){
            if(!obj[nums[j]]){
                freq[nums[j]] = (freq[nums[j]] || 0) + 1
                obj[nums[j]] = (obj[nums[j]] || 0) + 1;
            }
        }
    }
    let num: number = Infinity;
    for(let key in freq){
        if(freq[key] <= num && freq[key] === 1 && larValue < Number(key)){
            num = freq[key];
            larValue = Number(key);
        }
    }
    return num === Infinity ? -1 : larValue
};