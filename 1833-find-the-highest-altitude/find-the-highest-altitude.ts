function largestAltitude(gain: number[]): number {
    let arr: number[] = [0]
    for(let i: number = 1; i <= gain.length; i++){
        arr.push(arr[i - 1] + gain[i - 1]);
    }
    return Math.max(...arr)
};