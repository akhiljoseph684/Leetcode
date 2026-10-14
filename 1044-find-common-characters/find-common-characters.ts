function commonChars(words: string[]): string[] {
    let obj1 = {};
    let arr: string[] = [];
    for(let i: number = 0; i < words[0].length; i++){
        obj1[words[0][i]] = (obj1[words[0][i]] || 0) + 1;
    }
    for(let i: number = 1; i < words.length; i++){
        let obj2 = {};
        for(let j: number = 0; j < words[i].length; j++){
            obj2[words[i][j]] = (obj2[words[i][j]] || 0) + 1;
        }
        for(let key in obj1){
            if(obj2[key] && obj1[key] > obj2[key]){
                obj1[key] = obj2[key]
            }
            if(!(obj2[key])){
                obj1[key] = 0;
            }
        }
    }
    for(let key in obj1){
        for(let i: number = 0; i < obj1[key]; i++){
            arr.push(key)
        }
    }
    return arr;
};