function sumAndMultiply(n: number): number {
    let str: string = String(n);
    let s: string = "";
    let sum: number = 0;
    for(let i: number = 0; i < str.length; i++){
        if(str[i] !== '0'){
            s += str[i];
            sum += Number(str[i])
        }
    }
    return Number(s) * sum;
};