function vowelStrings(words: string[], left: number, right: number): number {
    let vowels: string = "aeiou";
    let count: number = 0;
    for(let i: number = left; i <= right; i++){
        if(vowels.includes(words[i][0]) && vowels.includes(words[i][words[i].length - 1])){
            count++;
        }
    }
    return count;
};