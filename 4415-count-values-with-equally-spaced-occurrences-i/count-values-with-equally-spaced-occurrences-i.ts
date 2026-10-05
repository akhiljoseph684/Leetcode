function countSpecialIntegers(nums: number[]): number {
    let obj = {};
    let count: number = 0;
    for(let i: number = 0; i < nums.length; i++){
        obj[nums[i]] = (obj[nums[i]] || []);
        obj[nums[i]].push(i);
    }
    for(let key in obj){
        if(obj[key].length === 3){
            let diff: number = obj[key][1] - obj[key][0];
            for(let i: number = 1;  i < obj[key].length - 1; i++){
                if(diff === obj[key][i + 1] - obj[key][i]){
                    count++;
                }
            }
        }
    }
    return count;
};