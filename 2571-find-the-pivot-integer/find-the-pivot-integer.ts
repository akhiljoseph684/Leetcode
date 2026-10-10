function pivotInteger(n: number): number {
        let sum: number = 0;
        let obj1 = {};
    for(let i: number = 1; i <= n; i++){
        sum += i;
        obj1[sum] = i;
    }
    for(let i: number = 1; i <= n; i++){
        let sum: number = 0;
        for(let j: number = i; j <= n; j++){
            sum += j;
        }
        if(obj1[sum] == i){
            return i;
        }
    }
    return -1;
};