function frequencySort(nums: number[]): number[] {
    let freq: number[] = [];
    let obj = {};
    for(let i: number = 0; i < nums.length; i++){
        obj[nums[i]] = {
            freq: (obj[nums[i]]?.freq || 0) + 1,
            index: i
        }
    }
    let arr = []
    for(let key in obj){
        arr.push(obj[key])
    }
    arr.sort((a, b) => {
        if(a.freq === b.freq){
            return nums[b.index] - nums[a.index]
        }
        return a.freq - b.freq
    })
    for(let i: number = 0; i < arr.length; i++){
        for(let j: number = 0; j < arr[i].freq; j++){
            freq.push(nums[arr[i].index])
        }
    }
    return freq
};