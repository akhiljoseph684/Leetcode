function maximumLengthSubstring(s: string): number {
    let output: number = 0;
    for(let i: number = 0; i < s.length; i++){
        let str: string = "";
        let obj = {};
        for(let j: number = i; j < s.length; j++){
            if(obj[s[j]] === 2){
                break;
            }
            obj[s[j]] = (obj[s[j]] || 0) + 1
            str += s[j];
        }
        if(output < str.length){
            output = str.length
        }
    }
    return output;
};