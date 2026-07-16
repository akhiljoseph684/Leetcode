function isSumEqual(firstWord: string, secondWord: string, targetWord: string): boolean {
    let str1: string = "";
    let str2: string = "";
    let tar: string = "";
    for(let i: number = 0; i < firstWord.length; i++){
        str1 += (firstWord.charCodeAt(i) - 97);
    }
    for(let i: number = 0; i < secondWord.length; i++){
        str2 += (secondWord.charCodeAt(i) - 97);
    }
    for(let i: number = 0; i < targetWord.length; i++){
        tar += (targetWord.charCodeAt(i) - 97);
    }
    return Number(str1) + Number(str2) === Number(tar);
};