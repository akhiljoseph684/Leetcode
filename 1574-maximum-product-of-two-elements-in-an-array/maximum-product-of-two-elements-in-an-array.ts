function maxProduct(nums: number[]): number {
    let greatest: number = -Infinity;
    for(let i: number = 0; i < nums.length; i++){
        for(let j: number = i + 1; j < nums.length; j++){
            let num: number = (nums[i] - 1) * (nums[j] - 1);
            if(greatest < num){
                greatest = num;
            }
        }
    }
    return greatest
};