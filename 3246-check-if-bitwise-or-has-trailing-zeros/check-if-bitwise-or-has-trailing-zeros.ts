function hasTrailingZeros(nums: number[]): boolean {
    for(let i: number = 0; i < nums.length; i++){
        for(let j: number = i + 1; j < nums.length; j++){
            let num = nums[i] | nums[j];
            let binary = num.toString(2)
            if(binary[binary.length - 1] === "0")return true;
        }
    }
    return false;
};