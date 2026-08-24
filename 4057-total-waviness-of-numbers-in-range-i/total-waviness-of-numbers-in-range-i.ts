function totalWaviness(num1: number, num2: number): number {
    let nums: number = 0;
    for(let i: number = num1; i <= num2; i++){
        let str: string = String(i);
        for(let j = 1; j < str.length - 1; j++){
            if(str.length  < 3)break;
            let n: number = Number(str[j]);
            if(n < Number(str[j - 1]) && n < Number(str[j + 1])){
                nums++;
            }
            if(n > Number(str[j - 1]) && n > Number(str[j + 1])){
                nums++;
            }
        }
    }
    return nums;
};