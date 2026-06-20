function trimTrailingVowels(s: string): string {
    let vowels = ["a", "e", "i", "o", "u"]
    for(let i: number = s.length - 1; i >= 0; i--){
        if(!vowels.includes(s[i])){
            return s.slice(0, i + 1)
        }
    }
    return ""
};