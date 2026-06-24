function digitFrequencyScore(n: number): number {
    let str: string = String(n);
    let obj = {}
    for(let i: number = 0; i < str.length; i++){
        obj[str[i]] = (obj[str[i]] || 0) + 1
    }
    let sum: number = 0;
    for(let key in obj){
        sum += Number(key) * obj[key]
    }
    return sum;
};