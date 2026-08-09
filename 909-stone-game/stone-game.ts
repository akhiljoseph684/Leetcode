function stoneGame(piles: number[]): boolean {
    let alice: number = 0;
    let bob: number = 0;
    let len: number = piles.length;
    for(let i: number = 0; i < len; i++){
        if(i % 2 === 0){
            if(piles[0] > piles[piles.length - 1]){
                alice += piles.shift()
            }else{
                alice += piles.pop()
            }
        }else{
            if(piles[0] > piles[piles.length - 1]){
                bob += piles.pop()
            }else{
                bob += piles.shift()
            }
        }
    }
    return alice > bob
};