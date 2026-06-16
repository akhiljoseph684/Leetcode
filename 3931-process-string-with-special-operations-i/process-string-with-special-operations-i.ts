function processStr(s: string): string {
    let str: string = "";
    for(let i: number = 0; i < s.length; i++){
        if(s[i] === "#"){
            str += str;
        }else if(s[i] === "%"){
            str = str.split("").reverse().join("")
        }else if(s[i] === "*"){
            str = str.slice(0, -1)
        }else{
            str += s[i]
        }
    }
    return str;
};