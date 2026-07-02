function countDigitOccurrences(nums: number[], digit: number): number {
    let count: number = 0;
    let strDigit: string = String(digit)
    for(let i: number = 0; i < nums.length; i++){
        let str : string = String(nums[i]);
        for(let j = 0; j < str.length; j++){
            if(str[j] == strDigit){
                count++;
            }
        }
    }
    return count;
};