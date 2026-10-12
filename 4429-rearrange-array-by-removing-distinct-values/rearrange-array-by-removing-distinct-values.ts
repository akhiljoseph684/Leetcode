function rearrangeArray(nums: number[]): number[] {
    let obj = {};
    let arr: number[] = [];
    for(let i: number = 0; i < nums.length; i++){
        for(let j: number = 0; j < nums.length; j++){
            obj[j] = (obj[j] || []);
            if(!obj[j].includes(nums[i])){
                obj[j].push(nums[i]);
                break;
            }
        }
    }
    for(let key in obj){
        arr.push(...obj[key].sort((a, b) => a - b))
    }
    return arr;
};