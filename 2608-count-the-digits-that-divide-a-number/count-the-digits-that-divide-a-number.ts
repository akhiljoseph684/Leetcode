function countDigits(num: number): number {
    let str: string = String(num);
    let count: number = 0;
    for(let i: number = 0; i < str.length; i++){
        if(num % Number(str[i]) === 0){
            count++;
        }
    }
    return count;
};