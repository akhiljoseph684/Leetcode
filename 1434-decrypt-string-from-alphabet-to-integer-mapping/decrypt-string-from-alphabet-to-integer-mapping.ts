function freqAlphabets(s: string): string {
    let str: string = "";
    for(let i: number = s.length - 1; i >= 0; i--){
        if(s[i] === "#"){
            let code: number = Number(s[i - 2] + s[i - 1]);
            str = String.fromCharCode(code + 96) + str;
            i -= 2;
        }else{
            let code: number = Number(s[i]);
            str = String.fromCharCode(code + 96) + str;
        }
    }
    return str;
};