function buildArray(target: number[], n: number): string[] {
    let max = Math.max(...target);
    let arr: string[] = [];
    for(let i: number = 1; i <= max; i++){
        if(target.includes(i)){
            arr.push("Push")
        }else{
            arr.push("Push", "Pop")
        }
    }
    return arr;
};