function countTestedDevices(batteryPercentages: number[]): number {
    let num: number = 0;
    for(let i = 0; i < batteryPercentages.length; i++){
        if(batteryPercentages[i] - num > 0){
            num++;
        }
    }
    return num;
};