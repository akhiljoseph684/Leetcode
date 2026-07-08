function splitWordsBySeparator(words: string[], separator: string): string[] {
    let arr: string[] = [];
    for(let i: number = 0; i < words.length; i++){
        let str = "";
        for(let j: number = 0; j < words[i].length; j++){
            if(words[i][j] === separator){
                if(str)arr.push(str);
                str = "";
            }else{
                str += words[i][j];
            }
        }
        if(str){
            arr.push(str);
        }
    }
    return arr;
};