function findIndices(nums: number[], indexDifference: number, valueDifference: number): number[] {
    for(let i: number = 0; i < nums.length - indexDifference; i++){
        for(let j: number = i + indexDifference; j < nums.length; j++){
            if(Math.abs(i - j) >= indexDifference && Math.abs(nums[i] - nums[j]) >= valueDifference){
                return [i, j]
            }
        }
    }
    return [-1, -1]
};