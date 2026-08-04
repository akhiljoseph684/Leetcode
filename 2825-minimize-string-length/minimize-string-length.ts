function minimizedStringLength(s: string): number {
    const set = new Set();
    for(let i: number = 0; i <  s.length; i++){
        set.add(s[i]);
    }
    return set.size
};