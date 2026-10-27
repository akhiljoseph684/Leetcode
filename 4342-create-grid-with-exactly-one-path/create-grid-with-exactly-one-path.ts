function createGrid(m: number, n: number): string[] {
    let arr: string[] = []
    for(let i: number = 0; i < m; i++){
        let str: string = "";
        for(let j: number = 0; j < n; j++){
            if(i === 0 || j === n - 1){
                str += ".";
            }else{
                str += "#";
            }
        }
        arr.push(str);
    }
    return arr;
};