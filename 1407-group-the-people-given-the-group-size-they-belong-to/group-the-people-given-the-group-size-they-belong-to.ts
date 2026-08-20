function groupThePeople(groupSizes: number[]): number[][] {
    let output: number[][] = [];
    let arr: number[] = [];
    let obj = {};
    for(let i: number = 0; i < groupSizes.length; i++){
        obj[groupSizes[i]] = (obj[groupSizes[i]] || []);
        obj[groupSizes[i]].push(i)
    }
    for(let key in obj){
        let j: number = Number(key)
        for(let i: number = 0; i < obj[key].length; i+=j){
            output.push(obj[key].slice(i, i + j))
        }
    }
    return output;
};