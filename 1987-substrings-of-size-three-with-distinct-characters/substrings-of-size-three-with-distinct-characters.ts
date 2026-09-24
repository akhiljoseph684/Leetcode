function countGoodSubstrings(s: string): number {
    let arr: string[] = []; 
    for(let i: number = 0; i < s.length - 2; i++){
        let str: string = "";
        for(let j = i; j < i + 3; j++){
            if(!str.includes(s[j])){
                str += s[j]
            }else{
                break;
            }
        }
        if(str.length === 3)arr.push(str);
    }
    return arr.length
};