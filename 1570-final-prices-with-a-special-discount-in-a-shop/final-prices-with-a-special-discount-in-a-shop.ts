function finalPrices(prices: number[]): number[] {
    let arr: number[] = [];
    for(let i: number = 0; i < prices.length; i++){
        let discount = false;
        for(let j: number = i + 1; j < prices.length; j++){
            if(prices[i] >= prices[j]){
                arr.push(prices[i] - prices[j]);
                discount = true;
                break;
            }
        }
        if(!discount){
            arr.push(prices[i])
        }
    }
    return arr;
};