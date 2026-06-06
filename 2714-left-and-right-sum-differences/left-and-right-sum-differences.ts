function leftRightDifference(nums: number[]): number[] {
    let arr1: number[] = []
    let arr2: number[] = []
    let ans: number[] = []
    let sum1: number = 0;
    let sum2: number = 0;
    let j: number = nums.length - 1
    for(let i: number = 0; i < nums.length; i++){
        if(i === 0){
            arr1[i] = i
            arr2[j] = i
        }else{
            sum1 += nums[i - 1]
            sum2 += nums[j + 1]
            arr1[i] = sum1;
            arr2 [j] = sum2;
        }
        j--;
    }
    for(let i: number = 0; i < nums.length; i++){
        let num: number = arr1[i] - arr2[i]
        num = Math.abs(num)
        ans.push(num)
    }
    return ans;
};