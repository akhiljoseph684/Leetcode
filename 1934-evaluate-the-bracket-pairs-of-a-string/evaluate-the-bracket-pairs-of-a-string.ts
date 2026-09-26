function evaluate(s: string, knowledge: string[][]): string {
    let str: string = "";
    let obj = {};
    for(let i: number = 0; i < knowledge.length; i++){
        obj[knowledge[i][0]] = knowledge[i][1]
    }
    let start: number = null;
    for(let i: number = 0; i < s.length; i++){
        if(s[i] === "("){
            start = i;
        }else if(s[i] === ")"){
            str += (obj[s.slice(start + 1, i)] || "?")
            start = null;
        }else if(!start && start !== 0){
            str += s[i]
        }
    }
    return str
};