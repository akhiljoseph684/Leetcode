function findMaxConsecutiveOnes(nums: number[]): number {
    let greatest: number = 0;
    let count: number = 0;
    for(let i: number = 0; i < nums.length; i++){
        if(nums[i] === 1){
            count++;
        }else{
            if(greatest < count){
                greatest = count;
            }
            count = 0;
        }
    }
    if(greatest < count){
        greatest = count;
    }
    return greatest;
};