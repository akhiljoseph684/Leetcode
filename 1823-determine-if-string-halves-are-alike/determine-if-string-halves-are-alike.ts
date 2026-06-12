function halvesAreAlike(s: string): boolean {
    let count1: number = 0;
    let count2: number = 0;
    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    for(let i: number = 0; i < s.length / 2; i++){
        if(vowels.includes(s[i]))count1++
        if(vowels.includes(s[(s.length / 2) + i]))count2++
    }
    return count1 === count2
};