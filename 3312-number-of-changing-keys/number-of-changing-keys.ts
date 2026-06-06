function countKeyChanges(s: string): number {
    let count: number = 0;
    let alpha: string[] = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    for(let i: number = 0; i < s.length - 1; i++){
        let index1: number = alpha.findIndex(x => x === s[i])
        let index2: number = alpha.findIndex(x => x === s[i + 1])
        if(index1 > 25){
            index1 -= 26;
        }

        if(index2 > 25){
            index2 -= 26;
        }
        if(index1 !== index2)count++;
    }
    return count;
};