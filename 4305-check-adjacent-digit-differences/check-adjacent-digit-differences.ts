
function isAdjacentDiffAtMostTwo(s: string): boolean {
    for(let i: number = 0; i < s.length - 1; i++){
        let n1: number = Number(s[i])
        let n2: number = Number(s[i + 1])
        if(Math.abs(n1 - n2) > 2){
            return false;
        }
    }
    return true;
};