function smallestNumber(n: number, t: number): number {
    while(true){
        let str: string = String(n);
        let num: number = 1;
        for(let i: number = 0; i < str.length; i++){
            num *= Number(str[i]);
        }
        if(num % t === 0){
            return n
        }
        n++;
    }
};