function deckRevealedIncreasing(deck: number[]): number[] {
    deck.sort((a, b) => b - a);
    let arr: number[] = [];
    for(let i: number = 0; i < deck.length; i++){
        if(i < 2){
            arr.unshift(deck[i])
        }else{
            let num = arr.pop();
            arr.unshift(deck[i], num)
        }
    }
    return arr;
};