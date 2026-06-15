function wateringPlants(plants: number[], capacity: number): number {
    let steps: number = 0;
    let water: number = capacity;
    for(let i: number = 0; i < plants.length; i++){
        water -= plants[i];
        if(i !== plants.length - 1 && plants[i + 1] > water){
            steps += (i + 1) * 2;
            water = capacity;
        }
        steps++;
    }
    return steps;
};