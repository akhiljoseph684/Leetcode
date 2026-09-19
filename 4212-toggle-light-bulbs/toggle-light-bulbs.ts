function toggleLightBulbs(bulbs: number[]): number[] {
    let obj = {};
    let arr: number[] = [];
    for(let i: number = 0; i < bulbs.length; i++){
        obj[bulbs[i]] = (obj[bulbs[i]] || false);
        obj[bulbs[i]] = !obj[bulbs[i]]
    }
    for(let key in obj){
        if(obj[key]){
            arr.push(Number(key))
        }
    }
    return arr;
};