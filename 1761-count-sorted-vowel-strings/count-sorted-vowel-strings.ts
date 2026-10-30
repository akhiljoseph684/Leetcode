function countVowelStrings(n: number): number {
    let count = 0;
    let vowel = ["a", "e", "i", "o", "u"]
    function addVowel(s){
        if(s.length === n){
            count++;
            return
        }
        let index = vowel.findIndex(v => v === s[s.length - 1]);
        for(let i: number = index; i < vowel.length; i++){
            addVowel(s + vowel[i]);
        }
    }
    for(let i: number = 0; i < vowel.length; i++){
        addVowel(vowel[i]);
    }
    return count;
};