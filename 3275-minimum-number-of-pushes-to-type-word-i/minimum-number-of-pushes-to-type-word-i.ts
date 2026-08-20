function minimumPushes(word: string): number {
    let obj = {};
    let num: number = 0;
    let n: number = 1;
    for(let i: number = 0; i < word.length; i++){
        obj[word[i]] = (obj[word[i]] || 0) + 1;
    }
    let arr = Object.keys(obj).sort((a, b) => obj[b] - obj[a])
    for(let i: number = 0; i < arr.length; i++){
        num += (obj[arr[i]] * n);
        if((i + 1) % 8 === 0){
            n++;
        }
    }
    return num
};