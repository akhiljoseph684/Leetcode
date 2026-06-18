function angleClock(hour: number, minutes: number): number {
    if(hour === 12)hour = 0;
    let num1: number = minutes * 6;
    let num2: number = (hour * 30) + (minutes * .5);
    let num: number = Math.abs(num1 - num2)
    return num > 180 ? 360 - num : num
};