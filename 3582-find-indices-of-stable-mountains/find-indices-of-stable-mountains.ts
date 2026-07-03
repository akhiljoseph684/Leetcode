function stableMountains(height: number[], threshold: number): number[] {
    let arr: number[] = []
    for(let i: number = 1; i < height.length; i++){
        if(height[i - 1] > threshold){
            arr.push(i)
        }
    }
    return arr;
};