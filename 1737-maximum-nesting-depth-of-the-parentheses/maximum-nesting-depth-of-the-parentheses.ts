function maxDepth(s: string): number {
    let count: number = 0;
    let greatest: number = 0;
    for(let i: number = 0; i < s.length; i++){
        if(s[i] === '('){
            count++;
            if(count > greatest){
                greatest = count;
            }
        }else if(s[i] === ')'){
            count--;
        }
    }
    return greatest;
};