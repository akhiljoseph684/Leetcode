function subsetXORSum(nums: number[]): number {
    let arr: number[][] = [[]];
    let sum: number = 0;
    for(let i: number = 0; i < nums.length; i++){
        let ar: number[][] = arr.map(curr => [...curr, nums[i]]);
        arr.push(...ar)
    }
    for(let i: number = 0; i < arr.length; i++){
        sum += arr[i].reduce((acc, curr) => acc ^ curr, 0)
    }
    return sum;
};