function canAliceWin(n: number): boolean {
    let stone: number = 10;
    let alice: boolean = false;
    while(n >= stone){
        n -= stone;
        stone--;
        alice = !alice;
    }
    return alice;
};