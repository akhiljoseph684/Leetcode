function mergeSimilarItems(items1: number[][], items2: number[][]): number[][] {
    let obj = {};
    let arr: number[][] = [];
    for(let i: number = 0; i < Math.max(items1.length, items2.length); i++){
        if(items1[i]){
            let [key, value] = items1[i]
            obj[key] = (obj[key] || 0) + value;
        }
        if(items2[i]){
            let [key, value] = items2[i]
            obj[key] = (obj[key] || 0) + value;
        }
    }
    for(let key in obj){
        arr.push([Number(key), obj[key]])
    }
    return arr;
};