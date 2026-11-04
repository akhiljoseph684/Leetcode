function isSameAfterReversals(num: number): boolean {
    let str: string = String(num);
    let rev: string = "";
    for(let i: number = str.length - 1; i >= 0; i--){
        rev += str[i];
    }
    str = String(Number(rev));
    rev = "";
    for(let i: number = str.length - 1; i >= 0; i--){
        rev += str[i];
    }
    return Number(rev) === num;
};