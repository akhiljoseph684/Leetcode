function minimumRefill(plants: number[], capacityA: number, capacityB: number): number {
    let refillCount: number = 0;
    let watarA: number = capacityA;
    let watarB: number = capacityB;
    for(let i: number = 0; i < Math.trunc(plants.length / 2); i++){
        watarA -= plants[i];
        watarB -= plants[plants.length - i - 1];
        if(i !== Math.trunc(plants.length / 2) - 1 && watarA < plants[i + 1]){
            refillCount++;
            watarA = capacityA;
        }
        if(i !== Math.trunc(plants.length / 2) - 1 && watarB < plants[plants.length - i - 2]){
            refillCount++;
            watarB = capacityB;
        }
    }
    if(plants.length % 2 !== 0){
        let middleIndex: number = Math.floor(plants.length / 2);
        if(plants[middleIndex] > watarA && plants[middleIndex] > watarB){
            refillCount++;
        }
    }
    return refillCount;
};