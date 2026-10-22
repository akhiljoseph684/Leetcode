function maximum69Number (num: number): number {
    let str: string = String(num);
    let max: number = num;
    for(let i: number = 0; i < str.length; i++){
        if(str[i] === "9"){
            max = Math.max(Number(str.slice(0, i) + "6" + str.slice(i + 1)), max)
        }else{
            max = Math.max(Number(str.slice(0, i) + "9" + str.slice(i + 1)), max)

        }
    }
    return max;
};