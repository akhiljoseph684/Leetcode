function sumCounts(nums: number[]): number {
    let sum: number = 0;
    let arr: number[][] = [];
    for(let i: number = 0; i < nums.length; i++){
        for(let j: number = i; j < nums.length; j++){
            arr.push(nums.slice(i, j + 1))
        }
    }
    function findUnique(arr){
        let a: number[] = [];
        for(let i: number = 0; i < arr.length; i++){
            if(!a.includes(arr[i])){
                a.push(arr[i])
            }
        }
        return a.length;
    }
    for(let i: number = 0; i < arr.length; i++){
        let num: number = findUnique(arr[i])
        sum += (num * num);
    }
    return sum;
};