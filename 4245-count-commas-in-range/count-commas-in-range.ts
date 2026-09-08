function countCommas(n: number): number {
    let num: number = 0;
    for(let i: number = 1000; i <= n; i++){
        let str: string = String(i);
        if(str.length > 6){
            num++;
        }
        if(str.length > 3){
            num++;
        }
    }
    return num;
};