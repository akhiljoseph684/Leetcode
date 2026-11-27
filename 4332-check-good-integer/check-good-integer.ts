function checkGoodInteger(n: number): boolean {
    let sq: number = 0;
    let sum: number = 0;
    while(n > 0){
        let num = n % 10;
        sq += num * num;
        sum += num;
        n = Math.floor(n / 10);
    }
    return (sq - sum) >= 50;
};