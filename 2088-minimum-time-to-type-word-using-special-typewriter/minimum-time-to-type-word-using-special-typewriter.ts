function minTimeToType(word: string): number {
    let alpha: string = "abcdefghijklmnopqrstuvwxyz"
    let sec: number = 0;
    let lastIndex = 0;
    for(let i: number = 0; i < word.length; i++){
        let n1 = lastIndex + 1
        let n2 = lastIndex - 1
        for(let j: number = 0; j <= 13; j++){
            n1 = n1 - 1;
            if(n1 === -1)n1 = 25;
            n2 = n2 + 1;
            if(n2 === 26)n2 = 0;
            if(word[i] == alpha[n1]){
                sec += j + 1;
                lastIndex = n1;
                break;
            }
            if(word[i] == alpha[n2]){
                sec += j + 1;
                lastIndex = n2;
                break;
            }
        }
    }
    return sec;
};