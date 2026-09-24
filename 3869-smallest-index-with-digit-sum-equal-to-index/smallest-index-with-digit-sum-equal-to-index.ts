function smallestIndex(nums: number[]): number {
    for(let i: number = 0; i < nums.length; i++){
      if(nums[i] < 10){
        if(i === nums[i])return i
      }else{
        let sum: number = 0;
        let str: string = String(nums[i]);
        for(let j: number = 0; j < str.length; j++){
          sum += Number(str[j])
        }
        if(i === sum)return i
      }
    }
    return -1
};