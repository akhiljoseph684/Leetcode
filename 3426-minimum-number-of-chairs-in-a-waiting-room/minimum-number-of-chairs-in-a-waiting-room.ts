function minimumChairs(s: string): number {
    let count: number = 0;
    let greatest: number = 0;
    for(let i: number = 0; i < s.length; i++){
        if(s[i] === "E"){
            count++;
        }else{
            count--;
        }
        if(greatest < count){
            greatest = count;
        }
    }
    return greatest;
};