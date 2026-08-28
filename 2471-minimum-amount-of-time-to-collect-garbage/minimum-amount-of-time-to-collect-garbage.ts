function garbageCollection(garbage: string[], travel: number[]): number {
    let total: number = 0;
    let t: number[] = [travel[0]];
    let m: boolean = false;
    let p: boolean = false;
    let g: boolean = false;
    let M: boolean = true;
    let P: boolean = true;
    let G: boolean = true;
    for(let i: number = 1; i < travel.length; i++){
        t[i] = t[i - 1] + travel[i]
    }
    for(let i: number = garbage.length - 1; i >= 0; i--){
        for(let j: number = 0; j < garbage[i].length; j++){
            let l: string = garbage[i][j];
            if(M && l === "M"){
                m = true;
            }
            if(P && l === "P"){
                p = true
            }
            if(G && l === "G"){
                g = true
            }
            total += 1;
        }
        if(M && m){
            M = false;
            total += (t[i - 1] || 0)
        }
        if(G && g){
            G = false;
            total += (t[i - 1] || 0)
        }
        if(P && p){
            P = false;
            total += (t[i - 1] || 0)
        }

    }
    return total;
};