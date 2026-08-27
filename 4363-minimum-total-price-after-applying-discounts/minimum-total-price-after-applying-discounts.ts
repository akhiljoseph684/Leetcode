function minPrice(prices: number[], discounts: number[]): number {
    prices.sort((a, b) => b - a);
    discounts.sort((a, b) => b - a);
    let total: number = 0;
    for(let i: number = 0; i < prices.length; i++){
        if(discounts[i]){
            total += prices[i] * (100 - discounts[i]) / 100;
        }else{
            total += prices[i]
        }
    }
    return total;
};